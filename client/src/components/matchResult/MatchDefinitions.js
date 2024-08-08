//Organized by trait
//https://i.thehoroscope.co/gemini-rising-the-influence-of-gemini-ascendant-on-personality/
const Aries= {
    Sun: "Arieses are bold people who also happen to be very strong. They go through life at the speed of light and don’t mind taking on any challenge.",
    Moon: "These natives have a lot of emotion mixed up in their personality, which means that they feel things at a much stronger intensity than the rest of us.",
    Ascendant: "Instilled with dynamism and strength, people with an Aries Ascendant will follow their goals relentlessly.",
    Mars: "If you have Mars in Aries you are impulsive and will work tirelessly to get what you want.",
    Mercury: "Mercury Arieses are assertive and direct, so you can rely on them to give you an honest opinion and to tell it as it is, no matter if they offend or not.",
    Venus: "As true personalities influenced by Venus in Aries, these natives have an urgent craving to immerse themselves in the thrill of different activities",
    Jupiter: "If you have Jupiter in Aries experiencing all sort of things is a priority for you.",
    Saturn: "The Saturnian Aries native is basically made up of an aggressive drive, a lot of it, which is kept in check by their inner limitations, the willpower that Saturn endows them with.",
    Neptune: "Neptunian Arians never hesitate and are not afraid at all to start new projects, to come up with new ideas, and present them to the whole world.",
    Uranus: "These people are both able and very keen on trying new things, either personal ideas or just exciting things that they stumble upon.",
    Pluto: "Because of their innate drive to succeed, and the patience that Pluto instills in them, these natives are hardly ones to give up after a hundred failed attempts.",
}
const ariesMap = new Map(Object.entries(Aries));

const Taurus= {
    Sun: "Taurus natives are the most hard-working and determined people in the zodiac. It’s a great thing to be around them because they’re reliable and can really bring harmony to their surroundings.",
    Moon: "Comfort, routine, a worriless lifestyle, no challenges and no risky business, these are the telltale signs of a native emotionally influenced by the Moon in Taurus.",
    Ascendant: "These natives can almost become obsessive about bringing some form of beauty in their lives.",
    Mars: "If you have Mars in Taurus you are comfortable in your own skin and will prioritize the things that give you pleasure.",
    Mercury: "Mercury Taurus native will be careful with what they are saying and will never say something until they have analyzed if their opinion is practical enough.",
    Venus: "Looking good, and with pretty refined tastes, the Venusian Taurians value their comfort a lot, maybe a little too much.",
    Jupiter: "Jupiter Taurus are practical, they will build their own fate by taking action; Only hard work and sustained effort will be their answer to what life has to offer.",
    Saturn : "Saturnian Taurus natives are very determined once they focus on doing something; They can be extremely ambitious and endure quite a lot of punishment on the path to success.",
    Neptune: "One who is born with Neptune in Taurus loves the idea of living in a luxurious and comfortable house with a glam and expensive design, and they are able to get it by working passionately their entire life.",
    Uranus: "Those born with Uranus in Taurus are never willing to give up on their ideas and dreams, even if they had to abandon everything else.",
    Pluto: "This native does not feel the need to change his life unless forced to, because they use to love the routine which fits them better and to do everything to keep that going.",
}
const taurusMap = new Map(Object.entries(Taurus));

const Gemini= {
    Sun: "Geminis are energetic and spontaneous, but they change their mind very fast. Their most obvious trait is the need they have for communication.",
    Moon: " Logical Moon Geminis tend to inhibit their feelings and emotions, rather than fluidly experience them as they come.",
    Ascendant: "These natives are witty and humorous and don’t hesitate to try new things.",
    Mars: "If you have Mars in Gemini you are averse to boredom and prepared for any sort of situation occurring.",
    Mercury: "Mercury Geminis, the best communicators of the zodiac, have the ability to filter information and make it logical and concise.",
    Venus: "Those born with Venus in Gemini are by far the most talkative individuals in the zodiac, and also the funniest guys in your groups of friends.",
    Jupiter: "If you have Jupiter in Gemini your luck comes from interactions with other people.",
    Saturn: "What is unexpected and unpredictable doesn’t cater to the tastes of Saturnian Geminis; They would rather prefer the safety of their own minds." ,
    Neptune: "Those with Neptune in Gemini in their natal chart carry a lot of potential when it comes to socializing, to expressing their thoughts and making them easily understood.",
    Uranus: "Uranus Geminis are innovators, inventors, the sages that bring about a state of meditation and illumination to the world.",
    Pluto: "Constantly immersing themselves in deeper and more intense experiences than ever before, Plutonian Geminis reshape their thinking patterns continuously, ever evolving.",
}
const geminiMap = new Map(Object.entries(Gemini));

const Cancer= {
    Sun: "Cancers are the most nurturing, caring and dedicated people in the zodiac. What characterizes them the most is their need to serve and to be the ones others always turn to.",
    Moon: "One born with the Moon in Cancer is a being who loves and feels at the highest of levels, always trying to empathize with those around, it’s natural they wouldn’t want to form superficial and temporary friendships.",
    Ascendant: "These natives put a great emphasis on their loved ones, up to the point of feeling overwhelmed.",
    Mars: "People with Mars in Cancer don’t confuse the changing nature of their emotions with weakness and are rather astute and determined.",
    Mercury: "Mercury Cancers are good listeners and can inspire others to be more open and warm.",
    Venus: "Those born with Venus in Cancer take the role of protectors, of caretakers in their families or groups of friends.",
    Jupiter: "Trusting their gut, Jupiter Cancers are instinctive and emotional. They can process others’ reactions in a deeper way than most of us.",
    Saturn: "Saturn's influence greatly enhances the protective instincts of Cancers. Either with family or loved ones, they will always take on the role of defenders",
    Neptune: "Cancer natives born under Neptune’s watery mark are very comfortable and deeply connected to their sense of belonging to a community.",
    Uranus: "Uranus Cancers are very sensitive to the natural changes of the world. They are very responsible and self-aware individuals and don’t dare to take anything for granted.",
    Pluto: "Plutonian Cancer natives are very vulnerable to change, and the only way to make the best of what they have, is for them to gain control."
}
const cancerMap = new Map(Object.entries(Cancer));

const Leo= {
    Sun: "Leos are dramatic, courageous and proud. What characterizes them the most is their need to express themselves.",
    Moon: "Under such a powerful Moon, these natives have to express themselves and release all the pressure gathered inside of them, and they do this in the showiest of ways.",
    Ascendant: "These natives are demanding and quick to express themselves in all circumstances.",
    Mars: "If you have Mars in Leo you are craving admiration and will not hesitate to burn bridges with those who don’t stroke your ego.",
    Mercury: "Comfortable with being authoritative, Mercury Leos will always be sure of what they are saying.",
    Venus: "Venusian Leos may be egocentric individuals who want for nothing else than to be admired but can also be very loving if they are satisfied.",
    Jupiter: "If you have Jupiter in Leo you are used to a lot of attention and imposing your opinions.",
    Saturn: "Organized, with a systematic mindset, and an unrelenting attitude",
    Neptune: "With much emotional depth hidden within, someone with Neptune in Leo lives on the edge of exquisite pleasure all the time, not knowing what follows next.",
    Uranus: "The sheer spontaneity of the Uranus Leo makes it so that these people can’t stay in one place for too long, and they won’t allow others to control them.",
    Pluto: "Plutonian Leos reach the full breadth of their potential when put in situations that require one to think outside the box, to come up with innovative ideas, untethered to traditional norms."
}
const leoMap = new Map(Object.entries(Leo));

const Virgo= {
    Sun: "Virgo natives are practical perfectionists, quite reserved in behaviour and wishing to get things done in the best possible way.",
    Moon: "With someone born when the Moon was in Virgo, their  greatest quality is their steady mind, followed by a grounded personality, and the tendency to take things from a realistic point of view.",
    Ascendant: "These natives don’t hesitate to speak their minds in order to make everything perfect around them.",
    Mars: "If you have Mars in Virgo you are inclined towards dominating those close with your need for perfection.",
    Mercury: "Precise and correct, Mercury Virgos will always be straight to the point when communicating.",
    Venus: "The Venus in Virgo native would rather attend a course of philosophy or have a debate about morality than indulging in superficial activities like everyone else.",
    Jupiter: "Jupiter in Virgo wishes to stick to tried and tested methods in life.",
    Saturn: "Saturnian Virgo needs to keep their attention focused on a given goal, always fiddling with plans, ideas, calculations, and so on.",
    Neptune: "Those born with Neptune in Virgo all about idealistic thinking.",
    Uranus: "Those born with Uranus in Virgo keep coming up with new ideas, always think of multiple ways to approach a situation, and often end up with the most inventive and surprising of methods.",
    Pluto: "As a Plutonian Virgo, you are a very intelligent individual who always prefers to do things with utmost seriousness, letting nothing escape out of control."
}
const virgoMap = new Map(Object.entries(Virgo));

const Libra= {
    Sun: "Libras will always try to bring peace and hate being alone. This means they give a lot of attention to their partnerships and usually see themselves through the eyes of others.",
    Moon: "These natives will try even harder than others, under the watchful eye of the Moon, to achieve a perfect unity of being, and attain stability in their lives.",
    Ascendant: "These natives make great companions, in and outside of love, always enthusiastic and willing.",
    Mars: "If you have Mars in Libra you are gentle and attentive but also take ages to make up your mind.",
    Mercury: "Balanced and composed, Mercury Libras are never impulsive and they can see everyone’s point of view before taking sides.",
    Venus: "The Venusian Libran can be said to be in their natural habitat when surrounded by loved ones and doesn’t like to argue or end up in aggressive circumstances.",
    Jupiter : "If you have Jupiter in Libra your aim, everywhere you go, is to make people get along.",
    Saturn: "Perfectionism is the tell-tale sign of a Saturn Libra.",
    Neptune: "These natives are idealistic, in a big way; However, they aren’t only dreamers who talk endlessly about how the world should be, in fact, they take it upon themselves to change it for the better.",
    Uranus: "The Uranus Libra is a visionary, someone who sees the future with a plan in mind, a plan that involves the good of everyone around, something that was never done before by anyone else.",
    Pluto: "Those born at a time when Pluto was transiting Libra are the kind of individuals who want to change the world, but not through forceful methods."
}
const libraMap = new Map(Object.entries(Libra))

const Scorpio= {
    Sun: "All the people born in Scorpio are known for their passion, assertiveness, determination and decisiveness. They’re natural born leaders who are always searching for the truth.",
    Moon: "Thanks to the Moon’s influence, these natives have become quite attuned to the emotional reactions of those around them, and they can rapidly deduce their motivations and inner desires.",
    Ascendant: "These natives behave as if they have a sixth sense and can connect the dots about anything.",
    Mars: "If you have Mars in Scorpio you are fiery and passionate about your opinions and try to find people who live as intensely as you.",
    Mercury: "Mercury Scorpios rely on instinct and have a highly developed emotional intelligence.",
    Venus: "Those born with Venus in Scorpio, are enveloped in such an air of mystery and sensuality that their enigmatic character is all everyone gets to talk about in their absence.",
    Jupiter: "Jupiter Scorpios are private and secretive; They have a magnetism that attracts luck.",
    Saturn: "Those born with Saturn in Scorpio benefit from great discipline, who always try not to stray away from their principles.",
    Neptune: "Those born with Neptune in Scorpio are very easily fascinated by anything that challenges their logical thinking, by what seems to hide untold secrets, mysteries, and what doesn’t reveal its inner nature so easily.",
    Uranus: "With the Scorpio zodiac sign being a very energetic and enthusiastic native, to begin with, Uranus’ influence coming up to spice things up, they bring in the sense of revolt and revolution.",
    Pluto: "Those who were born under the Pluto in Scorpio transit are free-spirited individuals who want to explore the world and see it for what it truly is."
}
const scorpioMap = new Map(Object.entries(Scorpio))

const Sagittarius= {
    Sun: "Sagittarians are very adventurous from both a mental and physical point of view. Their mind is always open, and they don’t mind change, no matter if it comes from others or from within themselves.",
    Moon: "These natives are intellectually active at all times, and any outside stimuli can make them fall into a state of contemplation.",
    Ascendant: "Full of adventure spirit, these people respond positively to any kind of challenge.",
    Mars: "If you have Mars in Sagittarius you are not easily tied down and your expectations of your loved one are not the most domestic.",
    Mercury: "Always well intentioned, Mercury Sagittarius people are so brutally honest they can’t be diplomatic.",
    Venus: "Venus in Sagittarius, the typical love adventurer of the zodiac, ever taking risks to have just a little bit more fun and excitement.",
    Jupiter: "Jupiter Sagittarians are free spirits who always think about the future and seem to get their luck from anything.",
    Saturn: "These natives are principled, just, and have a very knowledgeable nature; They refuse to bend themselves to irrationality or to initiate any sort of project that has no reasonable chance to succeed.",
    Neptune: "A curiosity about the world and its intricacies that no one else possesses, a sense of communication and empathy present nowhere else, these are the traits of this native, what makes them truly special.",
    Uranus: "Independence is a must-have for the wild and unrestrained Uranus Sagittarius. They are open-minded, unrestrained, and very adventurous.",
    Pluto: "The Plutonian Sagittarius seems to always be evolving from the experiences that they go through, however, changes in the worldview don’t mean that this native changes what they perceive the essence to be."
}
const sagittariusMap = new Map(Object.entries(Sagittarius))

const Capricorn= {
    Sun: "Capricorn natives are usually very successful, ambitious and a little bit stubborn. Their determination to succeed is what makes them who they are.",
    Moon: "Their natural realism, sunken in pragmatism, means that most times, the result of the efforts of a Moon in Capricorn native is a near-perfect combination of emotions versus reason.",
    Ascendant: "These natives make great first impressions and also end up motivating others.",
    Mars: "If you have Mars in Capricorn you have some very strong principles that you try to stick to.",
    Mercury: "Mercury Capricorns never waste time and are very good at understanding the most practical things.",
    Venus: "Venus in Capricorn have a pragmatic approach to love, and will treat everything like a task they’ve been given at work, with care, vigilance, attention, and a strategic mind.",
    Jupiter: "Those born with Jupiter in Capricorn in their natal chart are happy only when they achieve something greater than what they have set their minds to.",
    Saturn : "With ambition, perseverance, and great organizational skills, these natives use their skills in very efficient ways, giving off the impression they can take on anything.",
    Neptune: "Neptune in Capricorn won’t abandon their dreams in spite of all opposition. They are set on accomplishing their deepest desires, but they are also very careful that they never end up entertaining idealistic wishes.",
    Uranus: "With Uranus in Capricorn transit, they are never going to rush things, and would rather observe, analyze, deconstruct the problem, and proceed on solving it with patience and ease.",
    Pluto: "The native born with Pluto in Capricorn in their natal chart excels at doing things carefully, following a long-established routine, with a plan in mind.",
}
const capricornMap = new Map(Object.entries(Capricorn))
    
const Aquarius= {
    Sun: "Eccentric and having thoughts others don’t even dare to imagine, Aquarians regarded as great philosophers who can adopt the “outside the box” type of thinking.",
    Moon: "Rational and logical, these natives tend to behave with a sense of objectivity, thinking more about how things should be constructed for the best result, rather than how they feel about that certain pattern.",
    Ascendant: "These people create themselves an impressive image with most of the people they engage with.",
    Mars: "If you have Mars in Aquarius you are a lover of all things eccentric and are concerned about your peers.",
    Mercury: "Mercury in Aquarius people are advanced and often brilliant. Many people will find them weird because they see things differently.",
    Venus: "The native with Venus in Aquarius feels the rebellious air gathering up, forever pushing them against the societal barriers and regulations.",
    Jupiter: "People with Jupiter in Aquarius will always do things the way they want to do them.",
    Saturn : "Saturn complements the morally superior spirit of the Aquarians, their disposition toward generosity and general altruism, with a pragmatic sense anchored in reality.",
    Neptune: "Those with Neptune in Aquariusave big dreams, and they idealize the world. Without caring at all about the social conformity or expectations, they do their own thing, trusting in their own instincts.",
    Uranus: "Those born with Uranus in Aquarius are counted among the free-thinkers of the zodiac, individuals with an open-minded, unrivaled visionary attitude.",
    Pluto: "Those born with Pluto in Aquarius will go their own way and pave a road for themselves through life.",
}
const aquariusMap = new Map(Object.entries(Aquarius))

const Pisces= {
    Sun: "The most delicate and dreamy people in the zodiac, the natives born under the sign of Pisces, have their head in the clouds almost all the time. They’re not high-maintenance, but they do have a need for security.",
    Moon: "A person born with the Moon in Pisces takes their mental and emotional energy from sensations like affection, empathy, and so on; Sometimes, they can focus too much on wellbeing of other people.",
    Ascendant: "These people perceive the world through coloured lenses and get everyone to be more optimistic.",
    Mars: "If you have Mars in Pisces you are definitely one to fight for your dreams.",
    Mercury: "People with Mercury in Pisces are dreamy and vague; They are very open-minded and can’t hold on to a belief for too long.",
    Venus: "The best, most affectionate and loving partners that you can find, these natives are highly idealistic.",
    Jupiter: "People with Jupiter in Pisces are intuitive and good healers because they play with the subconscious a lot, whether their own or that of other people.",
    Saturn: "Saturn in Pisces may feel a lot of sensibilities; Sensitive reactions may make these natives have a tendency to see the negative things first.",
    Neptune: "Neptunian Pisces are very emotional and spiritually-oriented. They can tap into a source of ancient power, one of intuition, affection, compassion, and most importantly, ultimate devotion.",
    Uranus: "Those born with Uranus in Pisces are dreamers, visionaries, people who work with the forces of spirituality backing them up.",
    Pluto: "Pluto drives pisces natives to search for the ultimate truth of this world, hidden deep behind the layers of social conformism."
}
const piscesMap = new Map(Object.entries(Pisces))

// https://www.lofficielusa.com/pop-culture/zodiac-element-meaning-earth-air-water-fire-signs-astrology
const Element= {
    Earth: "Earth signs respond well to the things that they can clearly touch and see. This is what makes them sensual beings who are prone to deep connection.",
    Fire: "Fire signs are recognized for their spontaneity, impulse, creativity, and courage. They are often difficult to silence or contain and typically pursue big ideas with no apprehension.",
    Water: "Water are the most emotional signs within the zodiac and embody the fluidity their element. They are nurturing and perceptive which allows them to take on the happiness and sorrow of those that they connect with.",
    Air: "Air signs are curious; they seek out connection and knowledge. Most importantly, they are master communicators who can engage with almost anyone."
}
const elementMap = new Map(Object.entries(Element))

//https://www.astrology.com/article/modalities-cardinal.html
const Mode= {
    Cardinal: "Individuals possessing a cardinal modality like to get things going. They are active, quick, and ambitious.",
    Fixed: "Fixed folks move patiently and steadily. They may have a tendency to get stuck in their ways.",
    Mutable: "Mutable signs know how to go with the flow. They are adaptable and flexible and can change their form of expression to whatever a situation requires."
}
const modeMap = new Map(Object.entries(Mode))

const matchDef = {
    Aries: ariesMap,
    Taurus: taurusMap,
    Gemini: geminiMap,
    Cancer: cancerMap,
    Leo: leoMap,
    Virgo: virgoMap,
    Libra: libraMap,
    Scorpio: scorpioMap,
    Sagittarius: sagittariusMap,
    Capricorn: capricornMap,
    Aquarius: aquariusMap,
    Pisces: piscesMap,
    Element: elementMap,
    Mode: modeMap
}

export default matchDef