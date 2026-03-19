---
title: "The API Versioning Trap"
description: "Toggl spent over a decade managing the deprecation of their V8 API while transitioning to V9. Lessons learned on API versioning for product companies."
date: 2024-09-18
authors: ["Patrick Jusic", "Nick Meessen - de Wit"]
---

At Toggl, we recently concluded a decade-long journey to retire our V8 API and fully transition to the latest V9. This process was far more complex and time-consuming than we could ever expect, highlighting the challenges of API versioning for a product company. This post explores the complexities of API versioning, the pitfalls we encountered, and how best practices can differ depending on whether you're building a B2C or B2B SaaS product.

## Capital Sin

Our V8 API represented a major step for our backend infrastructure. Indeed, V8 marked the transition from our former Ruby on Rails backend to the current Go dominance. Practically speaking, it means that a team of Ruby engineers embraced a new language quite young back in 2012. Moving from an interpreted to a strongly typed language can be challenging, in particular, speaking of quite opinionated languages like Ruby and Go. We moved from an extreme like Ruby, probably one of the most implicit languages that can look like magic for newbies, to Go, which is one of the languages that most advocate for explicitness.

Go delivered on promises, allowing us to scale our infrastructure up to these days. Performance is not the only aspect to take into account when dealing with a growing codebase, though. In terms of structure and code design, V8 API was… arguably sub-optimal, to the point the team quickly started implementing an improved version 9 a couple of years later.

Over the following ten years, V8 and V9 coexisted for a number of reasons, making the deprecation of the old version harder and harder. V8 became deeply integrated not only with our internal systems but also with numerous external applications used by our customers.

Every new feature and change we worked on during this period required updates both to V8 and V9 endpoints while keeping the V8 interface unaffected. Such a persistent dependency is a massive burden for engineers that doesn't affect only velocity but also the happiness of dealing with changes.

## Complexity of Dependencies

Successfully deprecating an old API version involves much more than technical work. It requires ongoing communication and collaboration with both internal stakeholders and external customers.

Within Toggl, our product and engineering teams had to identify all the internal services relying on the V8 API. This was no small feat, given the API's extensive use in various features and backend processes. We had to ensure that all these services were compatible with V9 before deprecating V8, which required significant refactoring and rigorous testing.

The external dependencies were even more challenging. Many of our customers had built their own tools and workflows around the V8 API. These integrations were critical to their operations, meaning that any disruption could have serious consequences for their businesses. We needed to communicate effectively with these customers, provide ample notice of the impending changes, and offer support to help them migrate to the new API.

**It took over 3 years to fully deprecate V8 since we decided to seriously get it done.**

We issued multiple deprecation announcements to keep our customers informed about the timeline for retiring the API. These announcements were critical in ensuring that everyone had sufficient time to plan and execute their migrations. Despite our best efforts, we still encountered situations where customers were caught off guard, underscoring the importance of clear and repeated communication. We pushed the deadline for deprecation so many times I lost the count. Not only the public ones but also when we managed to restrict the API usage to a small number of premium customers, we still iterated over and over to be able to fully drop it.

Our support and customer success teams played a crucial role in this transition. They worked closely with customers to understand their specific use cases, troubleshoot issues, and provide guidance on migrating to V9. This back-and-forth communication was essential in addressing concerns and ensuring a smooth transition.

You can understand how time-consuming and expensive it can be to involve all these stakeholders to deprecate such a piece of infrastructure. From a business perspective, it is really difficult to sustain such an effort for a long time, and the risk is to keep an outdated piece of infrastructure running for years, as it happened in our case. Simple choices like creating a new API version could chase you for years. We strongly suggest you mind your steps and, hopefully, learn from our mistakes.

Probably, one of the biggest mistakes we made during these 10 years was not to declare the previous V8 deprecated as soon as V9 was ready. As previously mentioned, there are a number of reasons why it didn't happen, including V9 exhibiting worse performance. Still, eventually, the unclear versioning strategy led to more systems integrating and relying on the stable V8. Communication was not clear both internally and externally. We had multiple internal clients still using V8 when we set the deprecation goal, including our browser extension. The discovery about the browser extension has been really painful, and we fell from it when we thought at least most of the internal clients were deprecated. It also significantly pushed the ETA because dropping the old installed versions of the extensions was not trivial at all. While looking at external communication, our public docs only listed V8 up to three years ago, making another case for really bad communication and explaining why the network of dependencies kept growing.

## Theory and Best Practices

API versioning is a widely discussed topic. Navigating the web, you will find hundreds of posts describing benefits and best practices.

Important companies like Stripe and Shopify wrote about API versioning strategies as well.

API versioning is a double-edged sword. On one hand, it allows for evolution and improvement of services. On the other, it can lead to a proliferation of versions that become increasingly difficult to maintain. Supporting multiple versions simultaneously is technically referred as _Version Sprawl_.

Way too often, resources fail to mention how the approach to API versioning can differ significantly depending on whether you're building for B2C or B2B markets. When building a B2C product, you need fast iteration cycles, generally low impact of breaking changes, and emphasis on user experience and feature delivery. On the other side, building a B2B product comes with longer deprecation cycles, a higher impact of breaking changes due to deep integrations, and a greater need for backward compatibility. These are really different sets of requirements that must affect your versioning strategy.

We consider ourselves a product-led company, fully devoted to user feedback, experimentation, and fast iteration. Technical debt is the number one enemy to meet these requirements. Indeed, the inevitable growing technical debt in a scaling company slows down delivery cycles and overall the entire machine, making experimentation and improvements harder to deliver. API versioning can really easily turn into technical debt if your versioning strategy is not clear from the beginning.

All of this is also a side effect of the product culture in a B2C company that comes with additional friction for an engineering team to prioritize maintenance and toils like public documentation. But there is no way around it. Companies like Stripe have a clear incentive to maintain clear and up-to-date documentation because integrations are the main source of revenue for the company. In a company like Toggl that at the same time both never historically monetized API usage and has an active ecosystem of third-party integrations, the incentives for prioritization around these topics are mostly left to engineering maintenance and personal initiative.

The recipe for these occurrences is a mix of strategic planning and automation. First of all, abandon the idea of getting rid of technical debt all at once. It will require a number of iterations and smoothing to get to the point where you will actually be able to get rid of it. It was a key lesson for us and the only way we eventually managed to deprecate the old API. In terms of automation, instead, whatever requires a manual process to be maintained and such a process is not directly aligned with business goals will end up being outdated. For this reason, our existing public documentation is auto-generated automatically on each code release. The amount of manual work required for maintenance is really limited, and for the past three years seldom we suffered any type of inconsistency. Unfortunately, it doesn't mean our communication is now perfect; we are still missing a consistent changelog to inform third parties about API changes, but we are working on it.

Another aspect conflicting with best practices in the day-to-day is that although you can try to avoid breaking changes as much as you can, those are inevitable. As part of the infinite game, your company will be evolving over time, and sooner or later, the evolution will require some breaking change. The general approach to avoid being blocked by breaking changes is to branch. In the case of API versioning, you can either create a new version or new endpoint(s), migrate dependencies to the new branch, and eventually deprecate the old one. In this case, you temporarily maintain multiple functioning versions of the same system. The transition period is inevitable, but at least it allows the delivery of the new behavior to meet users' expectations.

When branching becomes systematic, though, and not just a temporary measure to deliver new functionalities, you might end up trying to maintain multiple API versions for longer periods of time. Maintaining multiple versions at the same time can easily transform into a nightmare. The primary reason is when your underlying data model, like your database schema, changes throughout different versions. In that case, the options are either to maintain different running schema versions, introducing serious complexity and maintenance overhead your team probably doesn't want to deal with, or on the other side to manage the backward compatibility via business logic. The latter is definitely easier and more manageable, but over time, it will be more and more difficult to ensure consistency with older versions.

In our case, the V9 API grew, introducing major changes to the data model. For instance, the Organization layer was later introduced, as well as a number of features and user roles. These changes made the maintenance of V8 a growing burden. Eventually, the old version will end up lacking compatibility or, worse, will become a dangerous entry point. First of all, security holes could arise when the old version has access to domains that are not covered by the new version. In the best-case scenario, the mismatch will be the source of inconsistencies.

## When V10?

If you think the question is a joke, it was actually discussed a number of times within the backend team. Up to some point, there was quite certainty that we would have started the implementation of a new V10 API sooner or later.

In recent years, the opportunity was seriously discussed in particular during two circumstances. The first one was a major refactoring we made of V9 API to standardize the code architecture in all our domain packages. We won't share details about this here, because it would require another blog post that maybe will come at some point, but enough context is to say that we spent almost 2 years refactoring our API code. Potentially, just writing a new API version would have been a reasonable approach, but we decided that the effort was as massive and took the safe bet. In retrospect, luckily, we didn't pick the new version option just for the sake of building a shiny new thing because we would potentially still today be struggling to deprecate V9, or maybe both V8 and V9 because deprecating two versions would have required even further effort we would have never prioritized.

The second circumstance was after the refactoring when we actually wondered which was our versioning strategy if we had one at all. The conclusion from all these discussions was that, as of today, we consider our API version-less. We have the v9 in the path because of backward compatibility, but we don't plan for a new version any time soon. We decided to embrace flexibility, and we think a version-less approach is the most efficient one to minimize maintenance and allow us to deliver user feedback and requirements quickly.

We embraced breaking changes as well, although we try to minimize them in every possible way. We had a number of projects that required some breaking changes to implement new functionalities or systems. Branching, keeping the existing backward compatibility running for some time, and announcing a deprecation notice proved to be effective. For instance, as part of our Shared Auth release we talked about in our previous blog post, we announced the deprecation of a number of endpoints that we kept running for some time, offering backward compatibility and eventually deprecated a few months later. In such cases, we also clearly communicated brownout periods to force customers relying on the service to react to interruptions. Of course communication went beyond a simple post, but we actively monitored usage and informed the organizations affected when the deadlines were approaching.

Hopefully, we learned the lesson: using a clear and structured communication strategy while not being blocked from releasing new stuff is a balance we think will allow us to keep the speed of delivery and innovation going forward.

## Key Lessons

We discussed a number of problems and challenges we faced with our API versioning. To summarize the lessons (and rants), here are some quick tips to avoid the pitfalls we encountered:

1. **Understand your business needs:** take into account your target customers and invest in your infrastructure accordingly. If your main source of revenue is third-party integrations, you will have to invest more into your infrastructure compared to how much you read in this post. Otherwise, our experience could save you a lot of time.

2. **Plan for deprecation from the start:** be aware about the lifetime of your system and build deprecation strategies into your design from day one. If you think deprecation is a problem for your older version, you might regret it for longer than your younger self expected.

3. **Communicate in advance:** schedule a deprecation period, communicate clearly to customers using more than one channel, like a blog post, and reach out via email.

4. **Define brownout periods:** often customers will not answer, but will eventually fire up when the service becomes unstable. Make sure the brownout windows are clearly communicated and long enough to give enough time to customers to react.

5. **Offer Migration Support:** Provide tools and documentation to ease the transition. For instance sharing public Swagger spec for our V9 helped out customers building their clients.

6. **Consider Version-less APIs:** Explore strategies that allow for evolution without explicit versioning. Don't feel like a bad engineer if you don't version your API. Long-term maintainability and evolutionary architectures are the most important aspects for companies, and no AI agent will be able to replace you in making these decisions anytime soon.

Our experience with the transition has been a valuable learning opportunity. As we move forward, we're committed to implementing these best practices to ensure smoother API evolution in the future, as well as maintaining and improving our communication with third-party developers.
