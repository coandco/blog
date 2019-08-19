var tipuesearch = {"pages":[{"title":"Project  1/52: preconvert - Supercharge Your Serialization!","text":"Project: 1/52 Title/Link: preconvert Pitch: No more is not JSON serializable errors Read if: You use JSON, MessagePack, BSON, or similar. Or, you are interested in the state of developing Python projects. Skip if: You don't use serialization, only use it with basic built-in types, or only use it from the context of a framework that handles it well already. Prior Work: https://hynek.me/articles/serialization/ , json-defaults , and probably many more. What Problem Does preconvert Solve? My first project is a small one that comes the way of a goods friends request made at OSCON. Many of us use Python's built-in json module or one of the similar serialization libraries available on PyPI. These are trivially easy to use, and generally, work great. You pass in your native Python objects to json.dumps and your done: import json json . dumps ({ \"project\" : \"preconvert\" }) They even tend to follow the same loose specification (a dumps and corresponding loads method) making switching between them for any reason equally straight forward. import simplejson as json json . dumps ({ \"project\" : \"preconvert\" }) This is pretty awesome! It's made even more so by the years of optimization these JSON libraries have received. Not only is outputting JSON easy, but it's also fast. Problems occur when you start going beyond the basic built-in types. Search for is not JSON serializable and countless stack-overflow questions will appear with many workarounds for the problem. The simplest of which is to override the default callback method provided by handling just the type that failed: import json from uuid import UUID , uuid1 def fallback_conversion ( item ): if type ( item ) == UUID : return str ( item ) json . dumps ( uuid1 (), default = fallback_conversion ) The above works great when you have one type you need to convert, and one place where you serialize data. It works particularly badly if you are serializing data which you don't necessarily have full control of in multiple places. Many web frameworks, including hug , provide mechanisms to get around this. They allow you to extend JSON serialization cleanly and provide built-in default serialization for most common types. My friend, Brandon, suggested this shouldn't be hidden within the walls of a framework. Everywhere json , or another serializer is used, it should be trivial to expand with custom types and handle common ones right out of the gate. I agreed, and preconvert was born. What's the Proposed Solution? preconvert is a small, framework independent, extendable Python library that aims to solve the above problems by: Providing an easy way to specify custom type serializers import preconvert @preconvert.always ( UUID ) def convert_UUID_to_str ( uuid_instance ): return str ( uuid_instance ) Using this ability to automatically handle common types (UUID, dataclasses, etc) Adding an easy mechanism to extend this further using entrypoint powered plugins Exposing the same interface defined by existing serializers to make preconvert an easy drop-in replacement. from preconvert.output import simplejson as json preconvert currently works out-of-the-box with bson , json , simplejson , and msgpack . Currently, there is one plugin to handle numpy types , that can be enabled simply by adding it to the projects package requirements. ` pip install preconvert_numpy ` For more information about the project, browse the documentation website . State of Python Project Creation One of the reasons I wanted to challenge myself to create 52 projects over this next year was because I genuinely believe it shouldn't be hard to create projects. While Python makes many things easy, it's surprising the number of things that should be considered for even a simple project. Documentation For this project I used both pdoc3 and mkdocs for the first time. pdoc3 is probably the easiest route to document a Python project and I appreciated how it encouraged me to write more expressive doc strings and better organize my project. mkdocs on the other hand has beautiful templates, integrates very well with the existing Markdown documentation I tend to include in GitHub repos, and has built in search capabilities. However, mkdocs noticeably lacks any auto-documentation abilities at the current time. To get around this, I created a build step that included customized pdoc3 output that was compatible with what is expected by mkdocs. I think it works fairly well, but I was disappointed with the lack of a robust all-in-one solution for simple projects. Local Environment Management I gave PipEnv its first serious try. It worked alright, but I found it surprisingly slow. It often was slow enough to make up for any time benefit it could have provided. I also found pipenv run and pipenv shell clunky to use. Finally, I found it's lockfile to be confused when I switched machines constantly, my best guess is because of wheels for different platforms. Still, I'm glad to see project environment management become an increased area of focus. For my next project, I intend to give poetry a try. Packaging I found flit to be an absolute joy to use. For the most part, it just worked and got out of my way. It's simplified approach is perfect for small projects. The only downside I encountered, which unfortunately for me is a major one, is the lack of Cython support. Static Analysis I'm a huge fan of static analysis, code formatters, and any tool that aims to raise the bar for code-quality on a project automatically. This project included all the ones I've used in the past , but also, mypy . For the most part, it just worked. As someone who is very comfortable with dynamically typed languages, I was surprised how little it impacted my productivity, and how even in this small project it found real errors. Thanks For Reading Thanks for taking the time to read about this new project! What do you think of preconvert? Any projects you would like to see in the future? Any projects I should try out? ~Timothy Crosley","tags":"New Project","url":"https://timothycrosley.com/project-1-preconvert","loc":"https://timothycrosley.com/project-1-preconvert"},{"title":"whoami","text":"Hi, I'm Timothy! I'm a Principal Software Engineer and Open Source Evangelist working on technologies to keep the web safe at DomainTools . I live with my wife Amanda and our daughter Penny in the Licton Springs Neighborhood of Seattle. You may know me from one of my Python projects, such as: isort Hug Concentration Jiphy Or, from one of my older, now deprecated Projects: WebBot Web Application Framework HoneyDo.es social to-do list. Or, you may know me from one of the many talks I've given at regional Python meetups and conferences. Finally, you may know me from my local community involvement: the neighborhood blog I run, the cleanups and events I've helped to lead, or North Seattle's Open Source Hackathon . I've crossed paths with many people, both directly and indirectly. But, I've felt connected to so few. I hope this blog can help build connections with more of you. After all, the few of you I have directly interacted with have left a profoundly positive impact on my life. -- As I get close to my 30th Birthday, I've decided to make a home for personal reflection and project updates. This website is that new home. To begin this journey, I thought I would reflect on how I got here. In particular, how I got into technology, what my specific interests are and what things I aim to explore in the future. \"No need to argue momma, I've made us money!\" I'm choosing to start my story before I ever even touched a computer. I'm doing this to highlight a truth about myself. Like many others, I've always hated to admit that money would have anything to do with my motivations. \"I want to build great things!\" \"I want to make the world a better place!\" \"I want to empower people!\". These are the messages I want to say to myself and other people. As is often the case, the reality isn't so simple. I do want all those things. But I know I am also driven by an innate desire to provide. I grew up in a passionate, loving, evangelical, and very low-income family. My childhood defined by ups and downs in nourishment and accommodations. My first moments of life I lived in, what felt, a mansion in Pennsylvania. Our Grandparents had provided us the housing, in hopes that it would enable our family to thrive. Soon, things changed. Before I had turned 3, my father had decided it was his mission to bring the gospel to the world. We left our comfortable accommodations traveling through the United States sharing the scripture. I don't have many memories from this time. But, there is one story I've heard that demonstrates well what life was like for the Crosley family at that point. We traveled from city to city, staying with other believers when we had the opportunity. Of course, sometimes we had to use temporary accommodations, and without much money coming in, this didn't mean a hotel. On one night, we made a tent to sleep right outside of a city. With me being the youngest (2 years of age at the time) my parents laid me on their only comfortable piece of bedding. As it grew late, I fell asleep on what resembled a small air mattress. To my family's dismay, a thunderstorm rolled in as we began to sleep. With no other choice, everyone attempted to sleep through it. As we slept, the rain got more and more intense, until it caused flooding that rushed into our tent. Everyone awoke and started grabbing their few personal belongings. In the panic, they didn't realize that I had started to float away. I always was a deep sleeper. While I did float outside of the tent, I didn't make it too far. Soon my parents realized what had happened, panicked, and found me. Everything was okay. But, it was so close to not being okay. There is no better way to put my early years, than always toeing the line between everything being okay and not. Of course, at some point, my parents grew tired of this. With few options, they reached out to my dad's parents, hoping they would put us up as we got back onto our feet. At four, I found myself, and the rest of the family living at my Grandparents. Here is where I find my first complete memory formed. My Grandparents were always the kindest, most hospitable and loving people I knew. Nonetheless, it was hard for my father to accept help and admit the challenges he faced. He wanted us to go back to being on our own. I remember one night, overhearing my parents arguing in the other room. As I pushed my ear against the wall that separated us, all I could hear was money. I didn't know what exactly it was about money that had my parents in such a fit. But, at the very least, it seemed like more couldn't be a problem. So, I went to work. My Grandparents had left crayons and paper in my room, so I did my best drawing as much money as I could. After drawing two full sheets, I busted into my parent's room. \"No need to argue momma, I've made us money!\". Everything was okay. But, it was so close to not being okay. I had fixed it. At least, I thought. \"Buy a copy! It's cheap!\" At some point, we did move back out. This time we didn't last too long on the road before settling down, seemingly for good. My dad had secured a stable job at an evangelical home for troubled kids. It didn't pay too much - but the local church rented us out a house they owned, for much less than the market rate. The house was old, in need of love, and full of asbestos. But, it was large enough for our entire family — only 2 of the 4 of us kids needed to share a room. We had found a home. My father, to his credit, realized technology had to be the future. And he always wanted more than anything for us kids to succeed. We had almost nothing frivolous in the house, but one day he came home with a portal to that future. At around the same time Windows 95 came out, we got our first computer. It, of course, didn't run Windows 95. It came from a pawn shop and ran only MS-Dos. It was perfect. There was very little of anything on the computer. At first, this disappointed me. I heard technology was limitless! This computer only had Edit and this mysterious application called QBasic. Luckily, my dad did secure a copy of Commander Keen on a floppy. After a brief, but enjoyable stint playing the game, I decided I wanted to discover QBasic. Luckily, it came with built-in help. In retrospect, this was the first time I learned the value of limitations. While boundless options have a broad appeal, limits are often even more empowering. Had I had the entire internet, after all, I would have collected every game there was. And, likely, never learned to code at all. At the time, and throughout my entire pre-adult life, I was home-schooled. My mom did her best to teach me but was always too ill to give it her full attention. No worries, this year we tried an off the shelf curriculum. Soon, I found myself less and less interested in the curriculum and more and more interested in the computer. When I did do my curriculum, I did everything I could to work the computer into it. I built memorization software for tests and made my own gamified math quizzes. And of course, QBasic functions as a calculator in a pinch. My siblings couldn't understand: \"What are you doing, Tim? We already beat Commander Keen!\" Of course, my siblings were right. We had run out of games. I was successful in using QBasic to help me out with homework. But, we all knew that the real purpose of a computer was for interactive entertainment. So, I did the only thing I could. I tried my best to make a game in QBasic. The first few were simple. ASCII art, a choice prompt, with the ASCII art updating after each choice submission. It was enough to get me even more hooked. I would sneak out of my bed at night, as I thought of different ways to make the game better. One night, I remember reading something in the documentation. Something that might enable me to make my games not need the enter key to submit each action. I ran downstairs until I got it working. I then stayed up all night, making my first game that utilized my discovery. It couldn't have been more worth it. This first game still used ASCII art, but it was completely interactive. You could move your little character on the platforms, and jump on and over enemies. Of course, the enemies still only moved when you did, but I thought it was the coolest thing I had ever seen. It was something I had thought of and created, and it worked. With my limited available canvas, all characters were rendered using one of two available smiley characters. And, with my limited imagination, I called my creation \"Smiley.\" I remember being so excited when my Grandparents came to visit. They always brought sweets and would take our whole family out to eat! And, I missed them, even though it seemed the family was finally getting along fine. They also had a new gadget, a camcorder, and of course, they wanted to film their grandchildren. Being the youngest at 6, I was a guaranteed target. Of course, for me, it was still about the computer. I took the opportunity to tell the broad audience (that I was sure the camera represented) about my new game. \"You should buy my new game! It's super fun, interactive, and only $1!\" \"Buy a copy! It's cheap!\" I exclaimed to the camera. I guess I was still trying to draw up new money. No one ever did buy the game, but it didn't matter, I had already fallen in love with programming. \"Windoze Sucks!\" As the years went on, I kept on programming. And, still, in the one tool, I had available: QBasic. It seemed like not a single day would go by without code going through the keyboard. One day, my parents brought me to the local library, where there was the internet. I scoured as much information as I could about programming. I made many games. Then I made a custom tool to launch my games. Finally, I built a graphical windowing environment I called SystemX. I also occasionally did some traditional studying. Much less than I was supposed to, but it seemed that no one cared as long as I kept scoring well on standardized tests. I learned a lot during this time, but I knew in the back of my head that I also missed out on a lot. One thing I never did was hang out with kids my age, and when I did, none of them seemed to understand me. How can I blame them? I didn't understand them either. At some point, our lives were stable enough that our parents gave us an allowance of 25 cents a week. It was enough to buy a Little Debbie or another unhealthy snack at the local corner store. It wasn't much, but it didn't matter: I rarely saw those 25 cents. Every once in a while, we make a trip to a book store. There, I would beg my dad to allow me an advance to buy a programming book I thought looked cool. Sometimes, he had no choice but to say no, but more often, he made it work. I gobbled them all up. And everything I learned I immediately tested out. It was addicting and fun. Everything I built is now gone, none of it still useful. But, the lessons I learned back then made me the person I am today. I still owe my dad many quarters. Three years later, at nine years old, my mom had gotten particularly ill. The rest of my siblings and I became forced to make a trip back to my Grandparents. I couldn't know it then, but I was about to encounter something that would change the course of my life forever. I wasn't allowed to drag along our Family computer. Terrified of being away from it, I was nonetheless thrilled to see my Grandparents. Luckily, they did have a computer — an old IBM PS/2. And a ton of games on floppy disks. Including \"Freddies Rescue Roundup.\" It reminded me of the games I had built and shared a name with my Grandfather: Fred. I loved it! Being tucked away in my Grandfathers office, I never was able to spend too much time on it. And of course, never write much code. My Grandparents recognized my strong desire to code. They started paying me to do chores around their house and taking me to the local computer store. Over a few months, I ended up with a Frankenstein 386 PC built from the remnants of no longer working computers. The case had a turbo button , but it never got connected to anything on the motherboard. No worries, I didn't need a button to make my computer go slower. I only needed to be compatible with the future . I built the desktop in the room my grandparents had put me up in, and spent hours on it every day. At this point, I got more and more enamored with the graphics the computer could make. I made little animated shorts. I even built a simple personal assistant that would respond to questions thrown its way. All still running on Dos. And, all still powered by an unreasonable number of QBasic GOTO statements. While I was busy coding, my siblings were busy doing what kids are supposed to during the summer. They were making friends and going outside. I couldn't understand it at the time, but I am forever grateful they did this. My brother, who always liked getting into trouble, made friends with a local kid with the same appetite for chaos. That summer they played with explosives, fought with people in the neighborhood, and tried to teach each-other karate. My brother, no matter how many times we argued, always expressed pride in my technical abilities. One day he invited his new friend over and had me show him the latest program I had been building. My brother's friend, Joe, thought it was cool. However, he asked \"Why are you using Dos?\", \"Why not Windows?\". It was a good question, but one with only one answer: \"I can't afford it.\" Joe told me to stay put, while he rushed back to his house and came back with a CD with the text \"Mandrake\" scribbled on it. Over the next few hours, we installed one of the first versions of Mandrake Linux on my old 386. The whole experience was dazzling to me. We, of course, ran into several installation issues. But in the end, I had a modern mouse-driven interface. And it had more programs and compilers then I could have dreamed. Mandrake Linux was my first exposure to Open Source, and it had me hooked. Hundreds of programmers from around the world had worked together to give me this gift. They brought me into the future, and they asked for nothing in return. To me, Open Source was and still is, about empowerment. About the recognization, that when we stop fighting and start collaborating, we all go farther and faster. Seeing this, I couldn't understand why anyone would use Windows. I became a Linux zealot. \"Windoze Sucks!\" I would pronounce, of course, I had barely ever touched Windows. In the end, my zealousness was a childish expression of indebtedness. \"No one likes me. I'm fat.\" Time kept turning, the family kept moving, and I kept programming. After that summer came to an end, I came back home - this time with my very own computer. We lasted in the house for one more year, before packing up for yet another adventure. This time, my oldest sister, Charity, was graduating high school. She had her eyes set on going to an evangelical college in Ohio called Cedarville. Smart and driven, she managed to pick up a few scholarships. Still, it was nowhere near enough to pay for the tuition. My father still wanted to help her succeed. Without any significant money to contribute, he decided to take a job at the College. By doing this, he was able to take advantage of a discount provided to the children of faculty. For the next year and a half, my father would work as a janitor. We moved to nearby Xenia, Ohio. A small town known for its history of severe tornado activity. As a 10-year-old kid, I loved Xenia. Everything felt very safe. So much so that us kids were able to explore the neighborhoods. My parents even felt good enough about Xenia to enroll me in the local public school, and I loved it. I made as many friends and took up as many activities as I could. Every day I would go to school early to perform the duties of a school crossing guard. On weekends, I did my first ever job: delivering the local newspaper. I also worked out agreements with my neighbors to mow their lawn. I made enough money from these jobs to further finance my ambitions. I built up my computer and bought even more programming books. With straight A's everything seemed to be firing on all cylinders. Of course, it couldn't last. During our short time there, Xenia did have a destructive tornado. But, it wasn't the weather that caused us to leave. My mother's health started to deteriorate again. Her sister asked us to move out to Florida so she could help take care of her. It didn't hurt that my father wasn't enjoying his new gig as a custodian and had a hard time finding other work in the town. We packed up all our belongings, yet again, and headed south. I immediately missed Ohio. My friends, safety, and freedom. 5th grade was a rare time of socialization for me; I would spend 6th grade once again as a home-schooler. It wasn't all bad, though. My aunt and uncle owned a large apartment complex, and let us stay in one of their units under reduced rent. I also got introduced to my cousins, who would be lasting friends from that point forward. On the plus side, I had a better computer at that point. I would drag my machine to their house, hook up a LAN, and play Counter-Strike. At some point, we decided it was too much work to drag the computer over. We dug a crossover cable a few hundred feet between our two units, allowing us to play without moving PCs. I wasn't the best at Counter-Strike. I was also the only one attempting to run it on Linux via Wine. Nonetheless, I found it exhilarating. Without school as a \"distraction,\" I threw myself deeper and deeper into programming. There was an acre of woods connected to my relative's property that my cousins and siblings would regularly go exploring in. They would build structures, throw axes, and play BB gun battles. Rarely, I would join them, but generally, I stayed back to code. One of my older cousins, Daniel, was curious about what had me so distracted. Unlike everyone before him, instead of expressing confusion, Daniel got it right away. Over the next several years, I, for the first time, had a friend that understood my passion. I shared with him, everything I thought I knew. When he went to college, he decided to get a Computer Science degree. And, during this time, he shared with me everything he was learning. Daniel is the reason I understood Big O notation, C, and pointer arithmetic, at such a young age. For the next six years, while we would change cities and my dad changed jobs a half dozen times, we would stay in Florida. The longest straight stretch I would remain anywhere in my pre-adult life. During this time, I transitioned from a naive kid to an angsty hormone-driven teenager. Without the social interaction of school, I looked more and more forward to the youth group at our church. Over time, I became interested in girls. That's when I came face-to-face with the ugly consequences of my single focus life. Avoiding every other activity to spend more time coding left me obese and awkward. One day, at 14 years of age, I looked in the mirror and told myself: \"No one likes me. I'm fat.\" I was 280 Lbs and wouldn't even dare to start a conversation with a member of the opposite sex. I suppose the lesson I should have learned from this was one of balance. In my 14-year-old mind, though, I didn't have time for balance. Over the next year, I went to work. Not a single day went by without me walking for hours. I used weights, did hundreds of sit-ups and pushups, fasted, and avoided every carb in front of me. Dieting, in many ways, was my new programming. I still found time to program for sure. But, if I had to choose between coding and losing another pound, I would have preferred the weight loss. This focus paid off. As I celebrated my 15th year of life, I had made it down to under 175 lbs, well within the healthy range for a 6'1 male. The drastic change gave me confidence, and with that confidence, I tried my luck talking to a few girls. To my dismay, it turned out that weight wasn't the only thing girls cared about in a potential partner. I had little exposure to popular culture at the time. And, when I did finally strike up a conversation with one of the girls at our church, we had no shared interest at all. Worst of all: the skill I had spent the majority of my life developing didn't seem to impress anyone. What did seem to impress them? Art, music, and the right amount of rebellion. I wasn't willing to give up. I let my hair grow out, and I started to listen to punk rock. In desperation, I started trying to think of ways to incorporate \"art\" into my skill set. In retrospect, the interface design concepts I got obsessed with aren't the kind of art that would get a girl. That didn't stop me from diving in even more in-depth. The most direct thing that fell out of this new interest was an icon set I made for KDE, called the Intrigue Icon Set . I spent countless hours drawing icons by hand and then digitizing them using Gimp. Something I would have never thought to do in the past, and I did it to impress other people. On the plus side, it gave me some of my first experiences giving back to the Open Source community. I interacted with users, listened to feedback, and made improvements. I even became proficient using PHP to build a searchable interface for my icon set. The biggest lesson I learned: Any motivation, no matter how silly, can be redirected into something positive. Will work for laptop. Programming had always been exciting for me. But, releasing things that other people used was a whole new level of thrill. It challenged me to be better. Even if only to avoid utter humiliation in the eyes of programmers across the world. Soon, I moved passed icons. I started making working desktop applications using QT and C++. I consumed book after book about OOP, design patterns, architecture, and even management. I had the drive to get better at everything in the development life-cycle not only coding. This built up my confidence while simultaneously building up my uncertainty. I realized more and more that disagreements abounded across the development eco-system. There was never a silver bullet that would make everyone happy. Someone, somewhere, would always be unhappy. The only thing I knew for sure was that I had to keep moving. I had to keep releasing things and improving. I made a contact manager, an image editor, a custom desktop environment, and a local search engine. Then I made Redhat Linux packages (RPMs) and websites to distribute them all. I felt like I was getting somewhere. I was making steady progress. Still, I hadn't made a single cent from the skill I had spent my whole life developing. I wanted to change that. I wanted to go pro. At 15, I had no idea how. Unsure of next steps, I decided to walk into every storefront within a few miles of our apartment. I would walk up to the front desk and ask if they needed a software developer. Almost no one accepted the offer, and most didn't even know how to take such an inquiry. Luckily, one random clothing store did want a software developer. They wanted a joint Point Of Sale (POS) and inventory management system for their small chain. And, they didn't want to pay what they saw as the high cost of the current off-the-shelf offerings. Luckily for them, there was something I wanted even more. AMD had recently released a mobile version of their pioneering 64-bit processor. I wanted to get my first laptop, and I felt it had to be 64-bit. I told them: \"I'll do it for a laptop.\" I got that laptop and used it to build the system they asked for over the next several months. Meanwhile, a member of our church also heard about my programming ability. They asked me to build their company's website for them in exchange for a few hundred dollars. At 15, In my mind, I had gone pro. Nothing could stop me now. For the next few years, it continued this way. I made small amounts of money, doing hard, and I felt impressive work. What else was there to do? There wasn't exactly a burgeoning tech scene in Winter Haven. As a teenager, I had a hard enough time convincing people to give me work at all. Not that it mattered. Soon, my parents had moved to an even less dense an area of Florida. As I got closer to turning 18, my days became a mix of studying for my GED, taking community college courses, and caring for my Mother. My family started to struggle, and eventually, I had to take a job at CiCi's pizza to help pay the bills. Embarrassingly to me, I made more money washing dishes than I had writing code. Soon my mom became so ill I had to stay home and care for her instead of taking college courses. I told myself, once I turned 18, I would find a way to make it on my own. And I would do it while doing what I love. \"Give me an opportunity. You won't regret it.\" As my 18th birthday approached, I looked for an exit. All my other siblings had left at that point. It was my turn next, and I didn't have to wait long. My father had switched jobs, yet again, to work as a truck driver. While truck driving paid okay, my father still had to spend a large amount of his paycheck on rent. I suggested I could move in with my Grandparents. They could then move into a smaller apartment. The downsize would save more than enough money to make up for what I brought in working at CiCi's. Our lease would be up in 6 months, and my dad loved the idea of saving money. He took it one step further. Once our contract was up, I would go live with my Grandparents and my Mother would join him on the truck. They wouldn't need to pay rent at all. Over the next few months, after moving back in with my grandparents in Annapolis, MD, I went to work trying to get a job. I built a personal portfolio of projects I had worked on and made sure to highlight both my contracts and Open Source work. I then registered with all the online job boards. In the end, it was my old strategy that worked best. In walking distance from me was an aviation company nestled in a business park called ARINC. ARINC, it turns out, needed all the programmers it could get. As an 18-year-old with no college degree, HR was hesitant to forward my resume along. Even though I wasn't sure it was true, I told HR that if they forwarded my resume, it could only make them look good. After getting connected to a hiring manager for the \"ARINC Direct\" division, I got my interview. I was nervous as I presented my work and experience. I didn't know or use Python, the primary language of ARINC Direct, but I promised them I would pick it up. \"Give me an opportunity. You won't regret it.\" I left the interview sweating. Two days later, I received an offer. $35K a year. For me, the amount didn't matter. I had gotten my foot in the door. They were willing to take a risk hiring an 18-year-old walk-in who had little relevant experience, and no college degree. I'm forever grateful for that. I started working at ARINC in June and turned 19 in August. I was so invested in the new job that I worked 10 hours day. I wasn't often the first one in, but I was always the last one out. The next few months were a flurry of learning. There was so much about working in a corporate environment for which I wasn't prepared. I learned how to fill out timesheets, have disagreements with co-workers, and work with others daily over the common code repository at the time: SVN. I also learned how much more important it is to build things for a group instead of for individuals. But, most importantly, I learned never to mix tabs and spaces. At first, I didn't understand why ARINC Direct chose Python. It wasn't compiled, it didn't have static type checking, and there were no pointers to anywhere. I would write code as simple as pseudo-code, paste it into an interpreter, and it would work. It was too easy. Soon, I would question why anyone would choose to start a project in anything else. Up until this point, programming languages were a tool I had to use to solve a problem. They were not something for which I would ever develop an affinity. Python was different. It was productive and pragmatic, and I loved it. \"She's not breathing.\" As the year came close to an end, my new coworkers started to leave on vacation. I didn't take a vacation at first, but I did take the opportunity to reduce my hours. For most of December, I was only working 8 hours a day. I started having more time to think about Open Source projects and read even more books. Sometimes, I even went out to meet friends. I felt excellent about my life at that point. Every few weeks I'd email my mother and let her know how I was doing. She would tell me how she was so proud of me! She would also tell me how much she hated living in the truck, and how much she wished they could be home. As Christmas came, my dad decided not to take a break due to the high pay during the holiday season. I understood, but I was disappointed. It would be my first Christmas without them. Instead, I would do my best to enjoy the holiday with my Grandparents. I still hadn't taken any time off, besides the provided holiday days and immediately went back to work. I was determined to do everything I could to prove my worth. I had already fixed countless production bugs and implemented new product features. Nonetheless, I still felt like I was an impostor, sure I would be fired at any moment. After all, I was only 19, and I didn't even have a degree. Soon, I would stop worrying about that. But, only because something much larger would steal my attention. Five days after Christmas, my Grandparents and I got a call from my father; he was on speakerphone. And he was panicking. \"She turned purple!\" \"I don't know what to do!!\" \"She's not breathing.\" My dad was calling as he stood next to my mom in an ambulance. Later we would find out she overdosed on the pain medication she was given due to her health conditions. I blamed myself. I shouldn't have gone off on my own -- I should have stayed and taken care of my mother. I took the next few weeks off. I didn't know how to react to what had happened. I was sadder than I had ever been, but I knew my sadness couldn't bring my mother back. When I went back to work, I managed my emotions the only way I knew how. I worked even longer days. It felt like I only left work to eat and sleep. I couldn't face the emotions, knowing if I did, they would overcome me. I worked at ARINC for the next four years. During that time, I made one my best friends, Brandon, who continues to work with me on projects to this day. Over time, I grew more and more in love with Python. I applied the knowledge I had learned from building QT apps to our web development problems. I made a framework that significantly reduced the time it took for our team to produce new features and web apps. We were a small shop with no front-end engineers, yet we were able to move much more quickly than larger shops. AJAX calls, JavaScript, even HTML, became abstracted away from us. Creating new web pages was as simple as dragging and dropping with a graphical user interface builder. It wasn't the perfect option for a big dev shop, but it was an excellent solution for us. Having an innate desire to automate everything, I even built a tool to format and categorize our imports. With ARINC's permission, I would release this tool as isort . In the end, I not only learned how to work within a team at ARINC but how to make money while still contributing back. In doing so, I developed a new guiding passion. I would build tools to empower other new developers like Linux had empowered me so many years ago. A new beginning. Over the years, I've taken new jobs, learned new technologies, patterns, and approaches. I've also released countless new Open Source projects. Some have been very successful, others rarely used. All of them have my entire heart put in. And I'm not done. Today is the beginning of my story. After all, I'm almost 30, not almost dead. I'm hoping to explore ways to simplify and automate development. To enable new developers, experienced developers, and teams alike, to solve their problems. And to do so more quickly and sustainably. Many of my projects will undoubtedly be duds, some of them I hope will help move the industry forward. All of them will be described in detail on this blog. Over the next 52 weeks, you can expect to read 52 articles posted on this blog. These posts will contain the details of 52 new projects or project updates. I hope you will be part of my story. Let's build some great things together.","tags":"Introduction","url":"https://timothycrosley.com/whoami","loc":"https://timothycrosley.com/whoami"}]};