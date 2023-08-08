import Painting from '@/components/home-page/painting';
import classes from './index.module.css'
import PaintingWithModal from '@/components/paintings/paintingWithModal';
import { useContext } from 'react';
import LanguageContext from '@/store/language';

const PAINTINGS = [
    {
      key: "1",
      height: 60,
      width: 40,
      dimensions: "60 x 40",
      name: "Вселена 47",
      enName: "Universe 47",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      sold: false,
      heading: "Аборт",
      enHeading: "Abortion",
      text: "Между пелените и първообраза Младостта трудно се отмива. В пояса й са потънали ветрове, в неотменната и съвършена песен на новородените -  никаква утеха, но как спокойно цъфтят кухите й очи в люспестите пети на вечността и белее облак тлъст, отлъчен от бялото и изтънял. Една капка кръв и атомите носят коварна нежност, поднесена на луди сблъсъци. Съвършенството завързало любовния плод със сбръчканата и изсмукана кухина на ласка, запокитило го извън ембриона, където някога било като вълна от сянка с лъскави хриле. Толкова малко плът имало, че видяло как по-навътре слънцето черноокия ужас обрулило, съвместило го с лице, леко като разкървавена капсула  на небесно, безволно подгизнало закрепена. Отпускали се откосите сълзи, просторно заспали, измамно вплетени. Или това бил дяволът само със захапаната си усмивка на грохот бездомно кух?",
      enText: "Between the diapers and the prototype, Youth is hard to wash away. Winds have sunk into its belt, in the indelible and pure song of the new-born - no comfort at all, but how calmly the hollow eyes are blooming in the scaly heels of eternity, and fat cloud pales whited and thinned. A falling blood drop and the atoms begin to carry a shifty tenderness served up to inflamed clashes. The perfection that bound the love egg to the dusty and sucked cavity of a weasel swept it out of the embryo, where it had once been like a shadow wave of shiny gills. There was so little flesh that it saw how further inward the sun enveloped the black-eyed horror, combined it with a face, light as a bleeding capsule of heaven, willy-nilly drenched and fixed. The poor tears fell, spaciously asleep, deceptively intertwined. Or was it just the devil with his biting smile like a rumbling homeless hollow?"
    },
    {
      key: "2",
      height: 60,
      width: 45,
      dimensions: "60 x 45",
      name: "Роза от Вселена 47",
      enName: "Rose From Universe 47",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      sold: false,
      heading: "Душа-копнение",
      enHeading: "Soul-longing",
      text: "Ако светът, който изричаш, не е този, който споделяш, а принадлежи на чужди и понякога на свои герои, то той бавноносно в подводната пустош на словесните сенки на други хора ще потъва. Светът в предела ще се сгуши с неовладени, престарели капчици на сърцето, непознато, дърпащо връвта на контра-живота, където наводнени бели лъчи разплискат отдръпващата се красота.",
      enText: "If the world you speak is not the world you share, but it belongs to other people and sometimes to your own heroes, then it will slowly sink into the underwater wasteland of other people's unwritten shadows. The limit of the world will nestle with untamed, aged drops of the foreign heart pulling the string of counter-life, where flooded white beams splash the retreating beauty."
    },
    {
      key: "3",
      height: 100,
      width: 70,
      dimensions: "100 x 70",
      name: "Космически рози",
      enName: "Space Roses",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      sold: false,
      heading: "Земя",
      enHeading: "Ground",
      text: "Ще изкормя Вселената, докато кухините на мислите ти не се подчинят на моя Бог. Той ще бъде сух хаос от разпилени любовни дни. Ще лежи в денонощието като лунно отражение в най-светлия ти спомен, който ще ми бъде досаден като самия теб. Забравям все по-бавно скоростта на светлината и баналния космос, на който ме научи праволинейното чувство от смъртоотворената ти душевна дупка. Никога няма да те изровя. Раната ти ще зее от земята.",
      enText: "I will disembowel the universe until the hollows of your thoughts submit to my God. He will be a dry chaos of wasted love days. He will rest in the day like a lunar reflection of your brightest memory, which will be as annoying to me as you. I'm slowly forgetting the speed of light and the banal cosmos that the rectilinear feeling of your death-opened soul-hole taught me. I'll never dig you up. Your wound will yawn from the ground. "
    },
    {
      key: "4",
      height: 30,
      width: 20,
      dimensions: "30 x 20",
      name: "РоЗЗи",
      enName: "Rozzes",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      sold: false,
      heading: "НЕНАЗОВИМОТО",
      enHeading: "UNNAMABLE",
      text: "Сгушена в душата съдбата име просъсква. /n Стои бездиханна на прага на отчаяние смирено, безсловесно /n и чака небесния взор покорно - опитомено, сломено. /n Сгушена в душата, съдбата име просъсква /n и пита небесата подземни, /n къде е краят, /n щом неназовимото мъртво живее, /n а в рая все още ридаят, /n тези, които в димен брътвеж ада дояждат.",
      enText: "Cuddled  in the soul, fatefulness hisses a name./n It stands breathless at the threshold of despair humbly, speechlessly, /n and it waits for the heavenly gaze tamely, brokenly. /n Cuddled in the soul, fatefulness hisses a name, /n and it asks the heavens below, /n where is the end /n if the unnameable lives deadly, /n and in heaven they still weep, /n those who are eating up hell in a smoky chattering chaos."
    },
    {
      key: "5",
      height: 60,
      width: 40,
      dimensions: "60 x 40",
      name: "Краличка",
      enName: "Little Queen",
      technique: "акрил, смесена техника, тиксо",
      enTechnique: "acrylic, mixed media, duct tape",
      sold: false,
      heading: "Паяжината",
      enHeading: "Spiderweb",
      text: "Звезден паяк пристъпва към бурята с отворени очи и смутени лъжи. Някой чука на вратата в затворения си сън и моли Бог да мине отвъд слънцето. Сух и студен въздухът се плъзва в мрака и трепери пред избора на малка и смълчана мечта. Колкото по-пурпурен е следобедът, толкова по-малко дни остават за броене. Твоя профил дебне анфаса на паралелните вселени помежду ни. Отново е нощ. Отново заспиваме. Отново запалваме истината. Разгаря се буреносен ход в прекалено много смъртоносни лъжи. Ето така многосекундно в  9,79 ч. се  будя и чувам смълчаната ти и преплетена сянка.",
      enText: "Starspider steps into the storm with far-reaching eyes and disconcerted lies. Someone knocks on the door in their closed sleep and asks God to pass beyond the sun. Dry and raw, the air slides into the blackness and trembles before the choice of a slight and silent dream. The more purple the afternoon, the fewer days left to count. Your profile lurks across the parallel worlds between us. It's night all over again. We fall asleep again. We light the truth again. A storm-bearing course of extreme deadly lies is unfolding. That's how many-secondly at 9.79 am I wake up and hear your silent and intertwined shadow."
    },
    {
      key: "6",
      height: 25,
      width: 18,
      dimensions: "25 x 18",
      name: "Течна роза",
      enName: "Liquid Rose",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      sold: false,
      heading: "Провал",
      enHeading: "Failure",
      text: "Скапана старица блуждае между сбръчканата повърхност на света и независимостта на духа. Стаите се стесняват и Смъртта се приближава с мека и тиха стъпка към детето в утробата на самотата. Ябълката, от която младостта хрупа възможностите на сърцето,е пълна с червиви мечти, окриляващи изпятата песен на съскаща змия. Спусъкът на отровата се влива в плача на новороденото слънце, сгушено в ъгъла на стеснената сянка от целувката на туберкулозен сън. Нищо не умира, но ако ме осъдиш, ще заплатиш с кървавото нещастие, подписано под вярата да бъдеш бог, от който нищо добро не следва. Не контролираш мен. Не заплашваш мен. Не се страхувам от грозната деградация, натъпкана в пашкул от гнусотия. Аз съм електрон, свободен електрон, а ти си една умряла старица със счупена цивилизационна патерица. Аз съм твоята душа. Аз съм твоята матрична схема. Аз съм твоят провал.",
      enText: "A rotten old woman wanders between the wrinkled surface of the world and the autonomy of the spirit. The rooms narrow and Death approaches with a silky and silent step towards the child in the womb of solitude. The apple from which youth nibbles the possibilities of the heart is full of wormy dreams winging the sung song of a hissing serpent. The trigger of the poison flows into the cry of the newborn sun, nestled in the corner of the constricted shadow from the kiss of a tubercular sleep. Nothing dies, but if you condemn me, you will pay with the bloody misfortune signed under the belief of being a god from which nothing good follows. You don't control me. You don't threaten me. I am not afraid of ugly degradation stuffed into a cocoon of abomination. I am an electron, a free electron, and you are a dead old woman with a broken crutch of civilization. I am your soul. I am your matrix diagram. I am your failure."
    },
    {
      key: "7",
      height: 80,
      width: 30,
      dimensions: "80 x 30",
      name: "Роза",
      enName: "Rose",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      sold: false,
      heading: "Катран",
      enHeading: "Tar",
      text: "Дълбините на непокорния океан бълнуват oбреченост.  Единствен брегът вълните чупи. Пясъците се отронват от устните на слънцето, а ръцете им в небето засмукване дълбаят. Кой е там? Кой е там? Кой идва? Денят умира. Утрото преминава отвъд. Звездата проговаря с катранен уплах.",
      enText: "The depths of the wayward (disobedient?) ocean ravish downfall. Only the shore broke the waves. The sands decline from the lips of the sun, and their hands dig into the sky with fusion. Who's there? Who's there? Who's coming? The day is dying. The morning passes beyond. The star speaks with tarry fear."
    },
    {
      key: "8",
      height: 80,
      width: 30,
      dimensions: "80 x 30",
      name: "Другите рози",
      enName: "Other Roses",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      sold: false,
      heading: "Плаващият гарван",
      enHeading: "The Floating Raven",
      text: "Плуващите птичеочи погледи се взират в сгъстеното от здрач море. /n Няма опит, който обозримо да разсече липсата. /n И пълзи, и лети смутът на поваленото от висини сърце. /n В раковината музейна на сърцето: девет препарирани врани. /n В лявото предсърдие, седем резонантни сблъсъка от седмицата на грехопадението. /n В дясното предсърдие, седем кристални камъка. /n Фините процепи на душата сълзите на последната самота просмукват. /n Морето гушва букета от тоналността им, /n а гарванът-гробар в самоцел полита. /n/n Солена и кървава водата запълва празнината в небесното предгърдие. /n/n Вали и никой смъртен не лети.",
      enText: "The floating bird's-eye gazes are staring out into the twilight-thickened sea. /n/n There is no experience that could cut fairly through the dearth. /n/n Crawls and flies the turmoil of the heart that was fallen by the heights. /n In the shell museum of the heart: nine stuffed crows. /n In the left atrium: seven resonant collisions of the week of the original sin. /n In the right atrium: seven crystal stones. /n/n The fine cracks of the soul absorb the tears of the last solitude. /n The sea hugs the bouquet from their tonality, /n and the raven-undertaker flies for its own sake. /n/n Salty and bloody water fills the void in the heavenly bosom. /n/n It rains and no mortal flies."
    },
    {
      key: "9",
      height: 60,
      width: 40,
      dimensions: "60 x 40",
      name: "Бонбонени рози",
      enName: "Candy Roses",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      sold: false,
      heading: "Тайна свобода",
      enHeading: "Secret Freedom",
      text: "Безбрежна мъката от лазурното небе струи и на някого тъжно пак шепти. Тъгата и страхът във вихрушка се редуват, а споменът потъва в черен пламък вял. Кажи ми, мила Свобода, защо тъй сърцето пълно ти обгръщаш, че залезът е вечната зора и в ден самотен ти прииждаш като октопод захванал подлата борба на удавянето бясно? Има смисъл, но уви, нечии мечти твърде свободни са за тук и остава блян, смлян като сдъвкана обувка, изхвърлена на път без изход. Ще изляза, ще излезем, но къде? Във нас, във теб и мен? В света от сенки и най-нежните лъжи, за да убием, умъртвим най-ценния затвор ,там, където тайните си крием. /n/n Аз съм тайна, свобода и памет.",
      enText: "Еternal heartache flows from the azure sky and whispers to someone sorrowfully again. The gloom and the panic are changing places in a whirlwind and the memory sinks into a black withered flame. Reveal me, dear Freedom, why do you so absolutely embrace your hear that sunset is the eternal dawn, and on a lonesome day you come like an octopus engaged in the vile struggle of drowning furiously? It makes sense but nontheless, one's dreams are too free for here, and it remains a dream ground like a chewed-up shoe thrown on a dead-end road. I'll go out, we'll go out, but where? In us, in you and me? In the world of shadows and the sweetest lies to kill, kill the most precious prison, where we hide our secrets. /n/n I am secret, freedom and memory."
    },
    {
      key: "10",
      height: 60,
      width: 40,
      dimensions: "60 x 40",
      name: "Басмая",
      enName: "Basmaya",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      sold: false,
      heading: "Звезднотраурни",
      enHeading: "Star Mournings",
      text: "Звездите от безбройните блестящи черепни кухини изсипват се. Небето със своите черепи,  наместо звезди, злокобно набъбва. Гласовете им в моя вселяват се. В очната кухина на гигантския череп потъвам. Попадам в съня ти. Виждам несъответствието на любовта като интензивен оголен пулс. Влизам в миналите, настоящите и бъдещите ти тела –  (в) безкрайността на затвора. Сълзата ми отключва тайната на Смъртта. /n/n Аз съм отвъд Бог единствено като човек. /n Ти си отвъд Бог единствено като мен.",
      enText: "The stars pour out from countless glittering cranial cavities. The sky with its skulls instead of stars swells ominously. Their voices inhabit mine. Into the eyehole of the giant skull I sink. I fall into your dream. I see the disparity of love as an extreme, naked pulse. I enter your past, present and future bodies – (into) the infinity of the prison. My tear unlocks the secret of Death: /n/n I am beyond God only as human. /n You are beyond God only as me."
    },
    {
      key: "11",
      height: 100,
      width: 70,
      dimensions: "100 x 70",
      name: "Мъртво извънземно",
      enName: "Dead Alien",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      sold: false,
      heading: "Е.Г.О. (Единствено Гоним Отдиха)",
      enHeading: "E.G.O (Only Chasing the Rest)",
      text: "Всеки път съдбата многолико се усмихва. Дяволската паст на кърваво поглъщане разтваря се и присмехулните души в мен и теб засмуква. Те и ние в ежедневна броеница нижем се – душа след  душа, усмивка след усмивка. Смеят се. Смеем се сантиментално трезво. Смееш се и ти. /n/n Ние сме едно просто множество, щастливо във смъртта на всеки един от нас.",
      enText: "Every time, fate smiles with countless faces. The blood-swallowing devil’s maw opens and consumes the mocking souls in me and you. They and we, in a daily rosary, we pray - soul after soul, smile after smile. They laugh. We laugh sentimentally sober. You laugh, too. /n/n We are a simple multitude, in the death of each one of us gloriously."
    },
    {
      key: "12",
      height: 80,
      width: 80,
      dimensions: "80 x 80",
      name: "Нигредо",
      enName: "Nigredo",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      sold: false,
      heading: "ЧЕРНА БЕЗЗВЕЗДНА ВСЕЛЕНА",
      enHeading: "BLACK STARLESS UNIVERSE",
      text: "Вселената челно в прокобата се блъска /n и какофонията в раковината насъсква. /n Със лекарство опитомих вечерната звезда /n и малко по малко скрих утринната следа. /n/n Черен е чертежът на часовника, /n часовете, /n числата, /n дори чистотата, /n черни са чудесата и черепите слепи, /n разрушени по течението на взора, /n разгорени в смирението на умора, /n разиграни в умилението на раздора. /n/n Беззвездната нощ е в малки черни искри, /n Беззвездно в тъжните си свистящи черти /n и трещи в дръзките си черни очи. /n Беззвездната нощ е в твоите искрящо мъртви очи.",
      enText: "The universe is bumping into the chasm headlong /n and the cacophony in the conch hisses. /n With a medicine I tamed the evening star /n and little by little I hid the morning trail. /n/n Black is the drawing of the clock, /n the hours, /n the numbers, /n even the cleanliness, /n miracles are black and skulls are blind, /n destroyed in the flow of the sight, /n inflamed in the humility of the weariness, /n played out in the mercy of the difference. /n/n The starless night is in little black sparks, /n Starless in its sad whistling remarks /n and crackling in his daring black eyes. /n The starless night is in your sparkling dead eyes."
    },
    {
      key: "13",
      height: 50,
      width: 35,
      dimensions: "50 x 35",
      name: "Мъртъв пламък",
      enName: "Dead Flame",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      sold: false,
      heading: "Тотал: 0 + безкрайност",
      enHeading: "Total: 0 + Infinity",
      text: "Ще изядеш любовта като майка на мъртво дете! \n Ще освободиш егото си отвъд мъдрия съвет! \n Ще правиш каквото повтарям, дори да те няма! \n Ще се подчиниш на несъществуващото! \n Ще бъдеш несъществен, само за малко, докато не се възвисиш, \n защото си душевна интоксикация.  \n\n Ако стриктно спазваш това - онова, ти ще се преродиш в: \n в идолопоклонническа амеба, \n в злостна муха, \n в словоохотлива хиена, \n в предприемач, \n лидер, \n шеф, \n в нецензуриран маниер,\n във велико и незабравимо капиталовложение на човешкото, \n т.е. в Бог без граници, \n в глобален главорез. \n Ще бъдеш нечий нулев оборот в чужд безкрай.",
      enText: "You will eat up love like the mother of a dead child! \n You will free your ego beyond wise advise! \n You will do as I demand, even if you are removed! \n You will surrender to the non-existent! \n You will be senseless, just for a little while, until you rise, \n because you are soulfoolly intoxicated. \n\n If you closely inspect this and that, you will be replaced into: \n as an pagan amoeba, \n as an evil fly, \n as a loquacious hyena, \n as entrepreneur, \n leader, \n boss, \n in an uncensored manner, \n in a great and unforgettable human investment, \n a.k.a. in God without limits, \n into a global thug. \n You will be someone's zero turnover in a foreign infinity."
    },
    {
      key: "14",
      height: 30,
      width: 20,
      dimensions: "30 x 20",
      name: "БъбБъб",
      enName: "BubBub",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      sold: false,
      heading: "Слънчево пълнолуние",
      enHeading: "Solar Full Moon",
      text: "Аз съм този, който звездите тъпче, докато пълнолунието бълнува. \n Аз съм този, в чието раждане поезията в тъмен тон блести. \n Този, който римата рутинно жили \n и дето пита музиката кой цитира на дактили. \n\n Днес съм дакел. Утре главорез. Преди три лета- таен трубадур. \n Но през нощта…, в собствения си затвор, гледам в твоята душа, \n през ключалката на чувствата съзирам малък остров вледенен, \n огрян от слънце, вдишано от теб \n и се сещам, \n че аз съм този, който звездите тъпче, докато пълнолунието бълнува.",
      enText: "I am the one who runs over the stars while the full moon raves. \n I am the one in whose birth the somber-toned poetry shines. \n The one who the rhyme routinely stings \n and the one who asks who quotes the music in dactyls. \n\n Today I am a dachshund and a slayer tomorrow. Three summers ago - a secret troubadour. \n But at night…, in my own prison, I look into your soul, \n through the lock of feelings I see a small ice island, \n lit by the sun, breathed in by you \n and I call to mind  \n that I am the one who runs over the stars while the full moon raves."
    },
    {
      key: "15",
      height: 60,
      width: 45,
      dimensions: "60 x 45",
      name: "Арсел",
      enName: "Arsel",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      sold: false,
      heading: "Зло природно бебе",
      enHeading: "Natural Evil Baby",
      text: "Тъмноогненено \n раждат природните родилни домове \n празни катафалки - \n пещерни гробища на самотата, \n в които черното и червеното, \n (крайно отрицателни качества), \n неголяма част от земната повърхност, \n са просто безвъзвратни съчувствия по блян  \n повити в плача на световното бебе - \n унило зло като перпендикулярна ос вглъбен живот. \n\n Угнетената демонична глава на съвестта се подава от алчния търбух на завистта \n като гол, бездомен нерв- \n като тегобно тегло от грях, \n като вътрешността на нищото, \n като огнена октава, свита в благослов, \n като гробът на Амин. \n\n Слънцето смъртта в орбитата си повива и започва да мълчи с изхлузени очи.",
      enText: ""
    },
    {
      key: "16",
      height: 60,
      width: 40,
      dimensions: "60 x 40",
      name: "Горгона",
      enName: "Gorgona",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      sold: false,
      heading: "",
      enHeading: "",
      text: "",
      enText: ""
    },
    {
      key: "17",
      height: 50,
      width: 35,
      dimensions: "50 x 35",
      name: "Турбо",
      enName: "Turbo",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      sold: false,
      heading: "",
      enHeading: "",
      text: "",
      enText: ""
    },
    {
      key: "18",
      height: 60,
      width: 40,
      dimensions: "60 x 40",
      name: "Руу",
      enName: "Roo",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      sold: true,
      heading: "",
      enHeading: "",
      text: "",
      enText: ""
    },
    {
      key: "19",
      height: 40,
      width: 30,
      dimensions: "40 x 30",
      name: "Просто грозно",
      enName: "Just Ugly",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      sold: false,
      heading: "",
      enHeading: "",
      text: "",
      enText: ""
    },
    {
      key: "20",
      height: 80,
      width: 60,
      dimensions: "80 x 60",
      name: "Шаман",
      enName: "Shaman",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      sold: false,
      heading: "",
      enHeading: "",
      text: "",
      enText: ""
    },
    {
      key: "21",
      height: 24,
      width: 19,
      dimensions: "24 x 19",
      name: "Смотана мадама",
      enName: "Clumsy Chick",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      sold: false,
      heading: "",
      enHeading: "",
      text: "",
      enText: ""
    },
    {
      key: "22",
      height: 60,
      width: 40,
      dimensions: "60 x 40",
      name: "Бременният плъх",
      enName: "The Pregnant Rat",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      sold: false,
      heading: "",
      enHeading: "",
      text: "",
      enText: ""
    },
    {
      key: "23",
      height: 60,
      width: 40,
      dimensions: "60 x 40",
      name: "Непознато цвете",
      enName: "Unknown Flower",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      sold: false,
      heading: "",
      enHeading: "",
      text: "",
      enText: ""
    },
    {
      key: "24",
      height: 80,
      width: 60,
      dimensions: "80 x 60",
      name: "Лейди Хамлет",
      enName: "Lady Hamlet",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      sold: false,
      heading: "",
      enHeading: "",
      text: "",
      enText: ""
    },
    {
      key: "25",
      height: 80,
      width: 80,
      dimensions: "80 x 80",
      name: "Грозен феникс",
      enName: "Ugly Phoenix",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      sold: false,
      heading: "",
      enHeading: "",
      text: "",
      enText: ""
    },
    {
      key: "26",
      height: 100,
      width: 70,
      dimensions: "100 x 70",
      name: "Метаморт",
      enName: "Metamort",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      sold: false,
      heading: "",
      enHeading: "",
      text: "",
      enText: ""
    },
    {
      key: "27",
      height: 80,
      width: 60,
      dimensions: "80 x 60",
      name: "Жива илюзия",
      enName: "Living Illusion",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      sold: false,   
      heading: "",
      enHeading: "",
      text: "",
      enText: ""
    },
    {
      key: "28",
      height: 60,
      width: 40,
      dimensions: "60 x 40",
      name: "Преди възкресение",
      enName: "Before Resurrection",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      sold: false,
      heading: "",
      enHeading: "",
      text: "",
      enText: ""
    },
    {
      key: "29",
      height: 60,
      width: 40,
      dimensions: "60 x 40",
      name: "Денонощие",
      enName: "Around The Clock",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      sold: false,
      heading: "",
      enHeading: "",
      text: "",
      enText: ""
    },
  ];

export default function Paintings() {
    const languageCtx = useContext(LanguageContext);

    const bulgarian = languageCtx.version;

    return (
        <section className={classes.background}>
            <section className={classes.overlay}>
            <section className="container">
                {PAINTINGS.map(p => {
                    return (
                        <PaintingWithModal
                            key={p.key}
                            src={`/paintings/${p.name}.jpg`}
                            alt={p.name}
                            name={p.name}
                            enName={p.enName}
                            technique={p.technique}
                            enTechnique={p.enTechnique}
                            width={400 / (p.height / p.width)}
                            height={400}
                            dimensions={p.dimensions}
                            heading={p.heading}
                            enHeading={p.enHeading}
                            text={p.text}
                            enText={p.enText}
                            sold={p.sold}
                            bulgarian={bulgarian}
                        />
                  );
                })}
            </section>
            </section>
            
        </section>
    )
}