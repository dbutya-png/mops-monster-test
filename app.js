const TYPES = {
  necromancer: {
    name: "Некромант НДЗ",
    image: "assets/necromancer.webp",
    portrait: [
      "Ты не ставишь крест на людях, идеях и начатых историях после первой неудачи. Если когда-то что-то показалось тебе важным, ты способен вернуться к этому спустя неделю, месяц или внезапно в три часа ночи. Пока остальные говорят: «Забудь и двигайся дальше», ты подозреваешь, что сюжет просто ушёл на перерыв.",
      "Ты верный, терпеливый и умеешь замечать потенциал там, где другие видят только пыль и закрытую вкладку. В продажах это превращается в редкий талант возвращать клиентов без ощущения, что их преследуют: ты помнишь контекст и находишь новый повод продолжить разговор."
    ],
    power: "Давать второй шанс людям и диалогам, которые все остальные уже похоронили.",
    dark: "Иногда пытаешься воскресить то, что уже официально попросило оставить его в покое.",
    phrase: "Мне кажется, мы с вами кое-что не договорили."
  },
  witch: {
    name: "Ведьма возражений",
    image: "assets/witch.webp",
    portrait: [
      "Ты замечаешь чуть больше, чем остальные. Пока все слушают слова, ты считываешь паузы, интонацию и странное «всё нормально», после которого очевидно, что ничего не нормально. Тебе сложно принять поверхностное объяснение: внутри сразу просыпается желание выяснить настоящую причину происходящего.",
      "Ты любопытный, интуитивный и избирательный в общении человек. Иногда обычная точка в сообщении превращается у тебя в расследование на три версии конфликта. В продажах это помогает слышать реальные сомнения клиента и подбирать аргументы под человека, а не доставать универсальное зелье из скрипта."
    ],
    power: "Находить вопрос, после которого человек наконец говорит, что его действительно беспокоит.",
    dark: "Можешь искать скрытое возражение даже в сообщении «Да, присылайте ссылку на оплату».",
    phrase: "А что именно вас сейчас останавливает?"
  },
  vampire: {
    name: "Вампир дедлайна",
    image: "assets/vampire.webp",
    portrait: [
      "Твой запас энергии работает по законам, которые пока не смогла объяснить наука. Ты можешь долго выглядеть спокойно, экономить силы и наблюдать за происходящим, а затем за один вечер сделать столько, сколько другие планировали на неделю. Особенно хорошо сверхспособности раскрываются, когда времени почти не осталось и в воздухе появился лёгкий аромат паники.",
      "Ты интенсивный, харизматичный и довольно избирательный человек. Не любишь распыляться, но способен полностью погрузиться в то, что тебя зацепило. В продажах ты особенно силён в горячих ситуациях: быстро принимаешь решения и не теряешься под давлением."
    ],
    power: "Включать сверхскорость ровно в тот момент, когда остальные начинают прощаться с надеждой.",
    dark: "Иногда подсознательно ждёшь дедлайна, потому что без него жизнь кажется недостаточно кинематографичной.",
    phrase: "До конца дня успеем."
  },
  werewolf: {
    name: "Оборотень коммуникации",
    image: "assets/werewolf.webp",
    portrait: [
      "В разных компаниях люди могут знать совершенно разные твои версии. Где-то ты серьёзный и собранный, где-то запускаешь поток мемов, а где-то молча наблюдаешь и подключаешься только в нужный момент. Это не маски — просто ты тонко чувствуешь атмосферу и понимаешь, какую сторону характера сейчас лучше показать.",
      "Ты гибкий, эмоционально внимательный и многогранный человек. После восьми диалогов подряд иногда уже сам не понимаешь, какая версия тебя настоящая. В продажах эта гибкость помогает легко менять тон, формат и темп разговора, не заставляя клиента подстраиваться под менеджера."
    ],
    power: "Создавать у совершенно разных людей ощущение: «Меня здесь понимают».",
    dark: "Можешь настолько сильно подстроиться под окружающих, что забываешь о собственных границах.",
    phrase: "Давайте сделаем так, как вам будет удобнее."
  },
  demon: {
    name: "Демон сделки",
    image: "assets/demon.webp",
    portrait: [
      "Ты не любишь бесконечно стоять возле двери, обсуждая, стоит ли её открывать. Тебе проще проверить ручку, войти и разобраться с последствиями по дороге. В тебе много решительности, азарта и внутреннего желания не просто участвовать, а влиять на то, чем закончится история.",
      "Ты амбициозный, смелый и энергичный человек. Пока остальные продолжают совещаться, у тебя уже появился план и, возможно, отдельный чат для его реализации. В продажах это проявляется в умении вовремя переводить приятный разговор в конкретный следующий шаг."
    ],
    power: "Превращать обсуждения, намерения и «когда-нибудь» в конкретное действие.",
    dark: "Иногда начинаешь финальный раунд раньше, чем остальные поняли, что игра уже началась.",
    phrase: "Тогда фиксируем и двигаемся дальше."
  },
  ghost: {
    name: "Призрак касаний",
    image: "assets/ghost.webp",
    portrait: [
      "Ты умеешь присутствовать, не занимая собой всё пространство. Наблюдаешь, слушаешь и редко вмешиваешься только ради того, чтобы тебя заметили. Можешь провести в рабочем чате целый день, оставить два сообщения и каким-то образом решить ими половину проблемы.",
      "Ты самостоятельный, деликатный и немного закрытый человек. Периодически исчезаешь, чтобы восстановить силы в тишине. В продажах твой стиль проявляется в аккуратных касаниях: ты чувствуешь дистанцию и умеешь напомнить о себе без давления."
    ],
    power: "Появляться именно тогда, когда твоё сообщение действительно будет уместно.",
    dark: "Иногда становишься настолько ненавязчивым, что люди начинают сомневаться, существовал ли менеджер вообще.",
    phrase: "Аккуратно напомню о себе."
  },
  mummy: {
    name: "Мумия CRM",
    image: "assets/mummy.webp",
    portrait: [
      "Тебе спокойнее, когда у вещей есть названия, у задач — сроки, а у документов — понятные папки. Ты любишь предсказуемость не потому, что боишься нового, а потому, что не видишь смысла создавать хаос там, где можно один раз нормально всё организовать.",
      "Ты надёжный, последовательный и внимательный человек. Твои маленькие ритуалы помогают удерживать мир от распада, хотя окружающие иногда не понимают, зачем файлу понадобилась шестая версия названия. В продажах ты отлично ведёшь историю клиента и редко теряешь следующий шаг."
    ],
    power: "Создавать порядок, в котором ничего важного не исчезает бесследно.",
    dark: "Иногда так тщательно оборачиваешь простую задачу процессами, что до неё уже сложно добраться без археолога.",
    phrase: "Я зафиксирую."
  },
  gargoyle: {
    name: "Гаргулья ценности",
    image: "assets/gargoyle.webp",
    portrait: [
      "Ты из тех людей, рядом с которыми становится спокойнее. Не обязательно много говоришь о своей надёжности — просто остаёшься на месте, когда становится сложно. Не сразу подпускаешь людей близко, зато своих защищаешь серьёзно, последовательно и иногда даже от их собственных сомнительных решений.",
      "Ты устойчивый, принципиальный и верный человек. Со стороны можешь казаться строгим, хотя за каменным выражением обычно скрывается много заботы. В продажах ты уверенно держишь ценность продукта, не раздаёшь скидки от испуга и умеешь спокойно объяснить, за что человек платит."
    ],
    power: "Защищать ценность, людей и договорённости, не превращая разговор в драку на башне.",
    dark: "Иногда переходишь в режим обороны раньше, чем кто-то действительно начал нападать.",
    phrase: "Давайте сначала разберёмся, за что здесь платят."
  },
  skeleton: {
    name: "Скелет презентации",
    image: "assets/skeleton.webp",
    portrait: [
      "Ты быстро отделяешь главное от декоративного тумана. Любишь ясность, честность и разговоры, после которых становится понятно, что происходит и что делать дальше. Если мысль можно выразить одним предложением, у тебя возникают вопросы к человеку, который принёс для неё презентацию на 48 слайдов.",
      "Ты рациональный, прямой и ироничный человек. Иногда твоя честность появляется в комнате на несколько секунд раньше дипломатии. В продажах это помогает объяснять сложное простыми словами и не закапывать ценность продукта под лишними формулировками."
    ],
    power: "Разбирать сложную информацию до понятного и крепкого каркаса.",
    dark: "Иногда убираешь столько лишнего, что вместе с водой исчезают эмоции, тепло и немного жизни.",
    phrase: "Коротко: вот в чём суть."
  },
  scarecrow: {
    name: "Пугало первого контакта",
    image: "assets/scarecrow.webp",
    portrait: [
      "Несмотря на название, людей ты скорее притягиваешь, чем отпугиваешь. Умеешь снять напряжение, найти повод для шутки и превратить неловкое знакомство в разговор, будто вы уже встречались. Рядом с тобой окружающим обычно проще расслабиться и перестать тщательно подбирать каждое слово.",
      "Ты тёплый, творческий и немного странный в хорошем смысле человек. Не боишься выглядеть смешно и умеешь использовать самоиронию, чтобы спасти ситуацию. В продажах это помогает быстро устанавливать контакт и разрушать ощущение «сейчас мне будут что-то продавать»."
    ],
    power: "Превращать холодное начало разговора в нормальное человеческое общение.",
    dark: "Иногда создаёшь настолько приятную атмосферу, что разговор превращается в дружеский подкаст без следующего шага.",
    phrase: "Давайте без лишнего официоза."
  }
};

const QUESTIONS = [
  {
    weight: 1,
    text: "Чью управленческую суперсилу ты бы хотел забрать себе?",
    options: [
      ["Паша Игнатович", ["scarecrow", "demon"]],
      ["Юрий Орлицкий", ["ghost", "necromancer"]],
      ["Дина Зиновец", ["witch", "scarecrow"]],
      ["Яна Калита", ["demon", "vampire"]],
      ["Дарья Лугина", ["witch", "skeleton"]],
      ["Николай Кречко", ["scarecrow", "mummy"]]
    ]
  },
  {
    weight: 2,
    text: "На офис наложили проклятие: каждая фраза становится реальностью. Что перестаёшь говорить первым?",
    options: [
      ["«Закрыл клиента»", ["demon", "gargoyle"]],
      ["«Нужно вскрыть потребность»", ["witch", "skeleton"]],
      ["«План горит»", ["vampire", "demon"]],
      ["«Уже мозг отключается»", ["mummy", "skeleton"]],
      ["«Клиент пропал»", ["necromancer", "ghost"]],
      ["«Этот созвон меня убил»", ["skeleton", "vampire"]]
    ]
  },
  {
    weight: 1,
    text: "Какое гео ты бы с удовольствием взял в работу на целый месяц?",
    options: [
      ["Беларусь", ["mummy", "skeleton"]],
      ["Узбекистан", ["scarecrow", "werewolf"]],
      ["Казахстан", ["demon", "gargoyle"]],
      ["Кыргызстан", ["werewolf", "necromancer"]],
      ["Молдова", ["ghost", "witch"]],
      ["Армения", ["vampire", "gargoyle"]]
    ]
  },
  {
    weight: 2,
    text: "Если бы ты стал офисным полтергейстом, какую пакость устроил бы?",
    options: [
      ["Печатал на принтере «Я рядом»", ["ghost", "skeleton"]],
      ["Прятал пропуска под потолком", ["scarecrow", "werewolf"]],
      ["Заставлял кулер шептать имена коллег", ["witch", "necromancer"]],
      ["Подменил весь кофе на коньяк", ["vampire", "scarecrow"]],
      ["Удалил кнопку «Пропустить» у обновления Windows", ["mummy", "gargoyle"]],
      ["Опускал и поднимал кресла каждые три минуты", ["werewolf", "necromancer"]]
    ]
  },
  {
    weight: 2,
    text: "Как выглядит твой рабочий стол?",
    options: [
      ["Как ПВЗ Wildberries", ["necromancer", "vampire"]],
      ["Листик со схемой продаж, ноутбук и вода", ["mummy", "skeleton"]],
      ["Аниме-постеры и няшные кошачьи ушки", ["necromancer", "witch"]],
      ["Пустые чашки, паспорт и антидепрессанты", ["ghost", "skeleton"]],
      ["Три слоя пыли и стикеры с галочками", ["gargoyle", "mummy"]],
      ["Как эстетичный филиал Pinterest", ["ghost", "witch"]]
    ]
  },
  {
    weight: 3,
    text: "Лерновская ведьма исполнит одно желание. Что выбираешь?",
    options: [
      ["Закрыть план первого числа", ["demon", "vampire"]],
      ["Мгновенные ответы клиентов", ["necromancer", "ghost"]],
      ["Вечную стабильность AMO", ["mummy", "skeleton"]],
      ["Сразу видеть истинное возражение", ["witch", "werewolf"]],
      ["Мир. Дружба. Жвачка во всех чатах", ["scarecrow", "gargoyle"]],
      ["Жизнь без «А я думал, это бесплатно…»", ["gargoyle", "demon"]]
    ]
  },
  {
    weight: 2,
    text: "Какой курс тебе приятнее всего продавать?",
    options: [
      ["«Нейросети. Практический курс»", ["witch", "werewolf"]],
      ["«Python-разработчик»", ["skeleton", "mummy"]],
      ["Excel", ["mummy", "gargoyle"]],
      ["«Графический дизайнер»", ["demon", "werewolf"]],
      ["Астрология", ["witch", "necromancer"]],
      ["«3D-дженералист»", ["demon", "vampire"]]
    ]
  },
  {
    weight: 3,
    text: "Офис захватили зомби. Твой первый шаг?",
    options: [
      ["Спасаю генерального директора в надежде стать РОПом", ["demon", "necromancer"]],
      ["Собираю команду в переговорке — пишем план", ["mummy", "gargoyle"]],
      ["Обзваниваю гео и прошу приютить меня", ["witch", "werewolf"]],
      ["Снимаю фото со стены — это мой щит", ["ghost", "vampire"]],
      ["Краду все ноутбуки и мониторы", ["vampire", "demon"]],
      ["Беру под защиту офисного краша", ["gargoyle", "scarecrow"]]
    ]
  },
  {
    weight: 2,
    text: "Какое место в офисе ты считаешь своим местом силы?",
    options: [
      ["Курилка", ["skeleton", "ghost"]],
      ["«Облепиха»", ["witch", "scarecrow"]],
      ["Обеденная зона", ["werewolf", "scarecrow"]],
      ["Мезонин в кабинете", ["vampire", "witch"]],
      ["Качалка в конце коридора", ["ghost", "gargoyle"]],
      ["Переговорка", ["mummy", "skeleton"]]
    ]
  },
  {
    weight: 3,
    text: "Клиент говорит: «Таролог запретил покупать курс до полнолуния». Что отвечаешь?",
    options: [
      ["«А что именно смутило таролога?»", ["witch", "werewolf"]],
      ["Перезвоню в полнолуние", ["mummy", "necromancer"]],
      ["«Рассрочка переживёт ретроград»", ["gargoyle", "demon"]],
      ["Отправляю мем с Меркурием", ["scarecrow", "vampire"]],
      ["Предлагаю счастливую дату старта", ["werewolf", "scarecrow"]],
      ["Принимаю судьбу и исчезаю", ["ghost", "skeleton"]]
    ]
  },
  {
    weight: 1,
    text: "С кем из тимлидов ты бы объединился во время апокалипсиса?",
    options: [
      ["Ульяна Лазаренко", ["demon", "vampire"]],
      ["Ангелина Шитикова", ["necromancer", "gargoyle"]],
      ["Лилит Мовсисян", ["necromancer", "mummy"]],
      ["Татьяна Бохан", ["ghost", "werewolf"]],
      ["Алина Митрохина", ["scarecrow", "ghost"]],
      ["Илья Юницин", ["scarecrow", "vampire"]]
    ]
  },
  {
    weight: 3,
    text: "Клиент предлагает оплатить курс душой. Что отвечаешь?",
    options: [
      ["«Только картой»", ["skeleton", "mummy"]],
      ["«А душа точно ваша?»", ["witch", "werewolf"]],
      ["«Рассрочку не рассматриваете?»", ["gargoyle", "demon"]],
      ["«Сейчас позову РОПа»", ["scarecrow", "gargoyle"]],
      ["«Две души — и договорились»", ["demon", "vampire"]],
      ["Принимаю судьбу и закрываю чат", ["ghost", "skeleton"]]
    ]
  },
  {
    weight: 3,
    text: "За каким заклинанием к тебе чаще всего приходят коллеги?",
    options: [
      ["Прочитать мысли клиента", ["witch", "werewolf"]],
      ["Разобрать манускрипты в AMO", ["skeleton", "mummy"]],
      ["Спасти горящий дедлайн", ["vampire", "demon"]],
      ["Воскресить мёртвую переписку", ["necromancer", "ghost"]],
      ["Сходить в логово руководителя", ["gargoyle", "necromancer"]],
      ["Успокоить после тяжёлого звонка", ["scarecrow", "werewolf"]]
    ]
  },
  {
    weight: 3,
    text: "Клиент оказался вампиром и может созвониться только после полуночи. Что делаешь?",
    options: [
      ["Созваниваемся в 00:01", ["vampire", "mummy"]],
      ["Записываю кружок в плаще", ["scarecrow", "werewolf"]],
      ["«Чеснок или стоимость?»", ["witch", "skeleton"]],
      ["Предлагаю продолжить в чате", ["ghost", "gargoyle"]],
      ["Прошу контакты всего клана", ["demon", "necromancer"]],
      ["Ставлю комментарий «Ночное гео»", ["mummy", "ghost"]]
    ]
  },
  {
    weight: 3,
    text: "В переговорке появилось магическое зеркало. Что ты спросишь?",
    options: [
      ["Когда я закрою план?", ["vampire", "demon"]],
      ["Что клиент думает на самом деле?", ["witch", "werewolf"]],
      ["Кто крадёт моих лидов?", ["ghost", "necromancer"]],
      ["Как получить повышение?", ["necromancer", "mummy"]],
      ["Кто съел мой сырок?", ["gargoyle", "skeleton"]],
      ["Что коллеги говорят обо мне?", ["scarecrow", "werewolf"]]
    ]
  }
];

const TYPE_ORDER = Object.keys(TYPES);
const MAX_SCORES = TYPE_ORDER.reduce((acc, type) => {
  acc[type] = QUESTIONS.reduce((sum, question) => {
    const appears = question.options.some(([, types]) => types.includes(type));
    return sum + (appears ? question.weight : 0);
  }, 0);
  return acc;
}, {});

const state = {
  view: "intro",
  current: 0,
  answers: Array(QUESTIONS.length).fill(null),
  locked: false,
  result: null
};

const app = document.getElementById("app");
const brandButton = document.getElementById("brandButton");

brandButton.addEventListener("click", () => {
  if (state.view === "quiz" && state.answers.some((answer) => answer !== null)) {
    if (!window.confirm("Вернуться в начало? Ответы текущего прохождения исчезнут.")) return;
  }
  resetToIntro();
});

document.addEventListener("keydown", (event) => {
  if (state.view !== "quiz" || state.locked) return;
  if (/^[1-6]$/.test(event.key)) {
    const index = Number(event.key) - 1;
    if (index < QUESTIONS[state.current].options.length) chooseAnswer(index);
  }
  if (event.key === "ArrowLeft") goBack();
});

function resetToIntro() {
  state.view = "intro";
  state.current = 0;
  state.answers = Array(QUESTIONS.length).fill(null);
  state.result = null;
  state.locked = false;
  renderIntro();
}

function renderIntro() {
  app.innerHTML = `
    <section class="screen hero-card glass-card">
      <div class="hero-copy">
        <span class="eyebrow">Хеллоуинский тест МОПs</span>
        <h1>Какой ты <span>монстр продаж?</span></h1>
        <p>Где-то внутри каждого МОПsа живёт своя нечисть. Ответь на 15 жизненно важных вопросов — про офис, коллег, продажи, зомби и оплату человеческими душами.</p>
        <ul class="hero-points">
          <li>Главный архетип в процентах</li>
          <li>Две дополнительные сущности</li>
          <li>Сверхспособность и тёмная сторона</li>
          <li>Карточка результата для скачивания</li>
        </ul>
        <div class="hero-meta">15 вопросов • 3–4 минуты • 0 шансов остаться обычным человеком</div>
        <button class="primary-button" id="startButton" type="button">Разбудить монстра</button>
      </div>
      <div class="hero-art" aria-hidden="true">
        <img class="hero-logo" src="assets/mops-logo.webp" alt="" />
      </div>
    </section>`;
  document.getElementById("startButton").addEventListener("click", startQuiz);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function startQuiz() {
  state.view = "quiz";
  state.current = 0;
  state.answers = Array(QUESTIONS.length).fill(null);
  renderQuestion();
}

function renderQuestion() {
  const question = QUESTIONS[state.current];
  const progress = ((state.current + 1) / QUESTIONS.length) * 100;
  const selected = state.answers[state.current];

  app.innerHTML = `
    <section class="screen quiz-shell">
      <div class="quiz-topbar">
        <button class="back-button" id="backButton" type="button" aria-label="Предыдущий вопрос" ${state.current === 0 ? "disabled" : ""}>←</button>
        <div class="progress-track" aria-label="Прогресс теста">
          <div class="progress-bar" style="width:${progress}%"></div>
        </div>
        <div class="progress-label">${state.current + 1} / ${QUESTIONS.length}</div>
      </div>
      <div class="question-card glass-card">
        <div class="question-number">Вопрос ${String(state.current + 1).padStart(2, "0")}</div>
        <h2>${question.text}</h2>
        <div class="answers">
          ${question.options.map(([label], index) => `
            <button class="answer-button ${selected === index ? "selected" : ""}" type="button" data-index="${index}">${label}</button>
          `).join("")}
        </div>
        <p class="quiz-hint">Можно нажимать клавиши 1–6. Магическое зеркало всё запомнит.</p>
      </div>
    </section>`;

  document.getElementById("backButton").addEventListener("click", goBack);
  document.querySelectorAll(".answer-button").forEach((button) => {
    button.addEventListener("click", () => chooseAnswer(Number(button.dataset.index)));
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function chooseAnswer(index) {
  if (state.locked) return;
  state.locked = true;
  state.answers[state.current] = index;
  const buttons = [...document.querySelectorAll(".answer-button")];
  buttons.forEach((button, buttonIndex) => button.classList.toggle("selected", buttonIndex === index));

  window.setTimeout(() => {
    if (state.current === QUESTIONS.length - 1) {
      state.result = calculateResult();
      state.view = "result";
      renderResult();
    } else {
      state.current += 1;
      renderQuestion();
    }
    state.locked = false;
  }, 220);
}

function goBack() {
  if (state.current === 0 || state.locked) return;
  state.current -= 1;
  renderQuestion();
}

function calculateResult() {
  const raw = Object.fromEntries(TYPE_ORDER.map((type) => [type, 0]));
  const strong = Object.fromEntries(TYPE_ORDER.map((type) => [type, 0]));
  const breadth = Object.fromEntries(TYPE_ORDER.map((type) => [type, 0]));

  state.answers.forEach((answerIndex, questionIndex) => {
    const question = QUESTIONS[questionIndex];
    const [, mappedTypes] = question.options[answerIndex];
    mappedTypes.forEach((type) => {
      raw[type] += question.weight;
      breadth[type] += 1;
      if (question.weight === 3) strong[type] += question.weight;
    });
  });

  const ranked = TYPE_ORDER.map((type, stableIndex) => ({
    type,
    raw: raw[type],
    strong: strong[type],
    breadth: breadth[type],
    affinity: raw[type] / MAX_SCORES[type],
    stableIndex
  })).sort((a, b) =>
    b.affinity - a.affinity ||
    b.strong - a.strong ||
    b.breadth - a.breadth ||
    b.raw - a.raw ||
    a.stableIndex - b.stableIndex
  );

  const top = ranked.slice(0, 3);
  const affinitySum = top.reduce((sum, item) => sum + item.affinity, 0);
  const firstPercent = Math.round((top[0].affinity / affinitySum) * 100);
  const secondPercent = Math.round((top[1].affinity / affinitySum) * 100);
  const thirdPercent = 100 - firstPercent - secondPercent;

  return top.map((item, index) => ({
    ...item,
    percent: [firstPercent, secondPercent, thirdPercent][index]
  }));
}

function renderResult() {
  const [main, ...secondary] = state.result;
  const archetype = TYPES[main.type];

  app.innerHTML = `
    <section class="screen result-layout">
      <div class="result-visual glass-card">
        <div class="result-badge"><span>Результат теста</span><span>МОПs</span></div>
        <div class="result-character-wrap">
          <img class="result-character" src="${archetype.image}" alt="${archetype.name}" />
        </div>
        <div class="result-share-note">Твоя внутренняя нечисть официально обнаружена</div>
      </div>

      <div class="result-copy glass-card">
        <span class="eyebrow">Магическое зеркало постановило</span>
        <h1>Ты на <span class="percent">${main.percent}%</span></h1>
        <h2>${archetype.name}</h2>

        <div class="portrait-copy">
          ${archetype.portrait.map((paragraph) => `<p>${paragraph}</p>`).join("")}
        </div>

        <div class="trait-grid">
          <article class="trait-card">
            <span>Сверхспособность</span>
            <p>${archetype.power}</p>
          </article>
          <article class="trait-card">
            <span>Тёмная сторона</span>
            <p>${archetype.dark}</p>
          </article>
          <article class="trait-card wide">
            <span>Коронная фраза</span>
            <blockquote>«${archetype.phrase}»</blockquote>
          </article>
        </div>

        <div class="secondary-results">
          <h3>В тебе также живут</h3>
          ${secondary.map((item) => `
            <div class="secondary-row">
              <strong>${TYPES[item.type].name}</strong>
              <span>${item.percent}%</span>
              <div class="secondary-bar"><i style="width:${Math.min(100, item.percent * 2.2)}%"></i></div>
            </div>
          `).join("")}
        </div>

        <div class="result-actions">
          <button class="primary-button" id="downloadButton" type="button">Скачать карточку</button>
          <button class="secondary-button" id="shareButton" type="button">Поделиться</button>
          <button class="ghost-button" id="restartButton" type="button">Пройти ещё раз</button>
        </div>
      </div>
    </section>`;

  document.getElementById("downloadButton").addEventListener("click", downloadResultCard);
  document.getElementById("shareButton").addEventListener("click", shareResult);
  document.getElementById("restartButton").addEventListener("click", startQuiz);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

async function downloadResultCard() {
  const button = document.getElementById("downloadButton");
  const previousText = button.textContent;
  button.textContent = "Собираем магию…";
  button.disabled = true;
  try {
    const canvas = await createResultCanvas();
    const link = document.createElement("a");
    link.download = `mops-${state.result[0].type}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
    showToast("Карточка сохранена");
  } catch (error) {
    console.error(error);
    showToast("Не удалось собрать карточку. Попробуй ещё раз.");
  } finally {
    button.textContent = previousText;
    button.disabled = false;
  }
}

async function createResultCanvas() {
  const [main, second, third] = state.result;
  const archetype = TYPES[main.type];
  const [logo, character] = await Promise.all([
    loadImage("assets/mops-logo.webp"),
    loadImage(archetype.image)
  ]);

  const canvas = document.createElement("canvas");
  canvas.width = 1080;
  canvas.height = 1350;
  const ctx = canvas.getContext("2d");

  const gradient = ctx.createLinearGradient(0, 0, 1080, 1350);
  gradient.addColorStop(0, "#4a176e");
  gradient.addColorStop(.52, "#27103f");
  gradient.addColorStop(1, "#12081f");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1080, 1350);

  const glow = ctx.createRadialGradient(810, 360, 20, 810, 360, 430);
  glow.addColorStop(0, "rgba(210,138,255,.38)");
  glow.addColorStop(.45, "rgba(232,189,99,.12)");
  glow.addColorStop(1, "rgba(18,8,31,0)");
  ctx.fillStyle = glow;
  ctx.fillRect(380, 0, 700, 850);

  ctx.strokeStyle = "rgba(232,189,99,.65)";
  ctx.lineWidth = 3;
  roundRect(ctx, 34, 34, 1012, 1282, 34);
  ctx.stroke();

  ctx.save();
  roundRect(ctx, 62, 62, 116, 116, 25);
  ctx.clip();
  ctx.drawImage(logo, 62, 62, 116, 116);
  ctx.restore();

  ctx.fillStyle = "#ffe2a1";
  ctx.font = "800 22px Arial, sans-serif";
  ctx.fillText("МОПs • КАКОЙ ТЫ МОНСТР ПРОДАЖ?", 200, 102);
  ctx.fillStyle = "rgba(255,248,231,.62)";
  ctx.font = "600 19px Arial, sans-serif";
  ctx.fillText("Хеллоуинский тест отдела паранормальных продаж", 200, 140);

  ctx.fillStyle = "#fff8e7";
  ctx.font = "800 34px Arial, sans-serif";
  ctx.fillText("ТЫ НА", 70, 275);
  ctx.fillStyle = "#ffe2a1";
  ctx.font = "900 122px Arial, sans-serif";
  ctx.fillText(`${main.percent}%`, 68, 398);

  ctx.fillStyle = "#fff8e7";
  ctx.font = "900 54px Arial, sans-serif";
  wrapText(ctx, archetype.name.toUpperCase(), 70, 468, 430, 62, 3);

  const imageBox = fitContain(character.width, character.height, 540, 570);
  ctx.drawImage(character, 505 + (540 - imageBox.width) / 2, 190 + (570 - imageBox.height) / 2, imageBox.width, imageBox.height);

  ctx.fillStyle = "rgba(255,255,255,.055)";
  roundRect(ctx, 62, 705, 956, 208, 26);
  ctx.fill();
  ctx.strokeStyle = "rgba(232,189,99,.24)";
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.fillStyle = "#ffe2a1";
  ctx.font = "900 18px Arial, sans-serif";
  ctx.fillText("СВЕРХСПОСОБНОСТЬ", 92, 753);
  ctx.fillStyle = "rgba(255,248,231,.9)";
  ctx.font = "600 26px Arial, sans-serif";
  wrapText(ctx, archetype.power, 92, 795, 850, 35, 3);

  ctx.fillStyle = "#ffe2a1";
  ctx.font = "900 18px Arial, sans-serif";
  ctx.fillText("ТЁМНАЯ СТОРОНА", 92, 968);
  ctx.fillStyle = "rgba(255,248,231,.86)";
  ctx.font = "600 24px Arial, sans-serif";
  wrapText(ctx, archetype.dark, 92, 1010, 850, 33, 3);

  ctx.fillStyle = "rgba(232,189,99,.12)";
  roundRect(ctx, 62, 1113, 956, 111, 24);
  ctx.fill();
  ctx.fillStyle = "#fff8e7";
  ctx.font = "800 27px Arial, sans-serif";
  wrapText(ctx, `«${archetype.phrase}»`, 92, 1160, 840, 34, 2);

  ctx.fillStyle = "rgba(255,248,231,.58)";
  ctx.font = "700 18px Arial, sans-serif";
  ctx.fillText("В ТЕБЕ ТАКЖЕ ЖИВУТ:", 72, 1282);
  ctx.fillStyle = "#ffe2a1";
  ctx.textAlign = "right";
  ctx.fillText(`${second.percent}% ${TYPES[second.type].name}  •  ${third.percent}% ${TYPES[third.type].name}`, 1006, 1282);
  ctx.textAlign = "left";

  return canvas;
}

async function shareResult() {
  const [main, second, third] = state.result;
  const text = `Я на ${main.percent}% — ${TYPES[main.type].name}. Во мне также живут ${second.percent}% ${TYPES[second.type].name} и ${third.percent}% ${TYPES[third.type].name}. А кто ты из нечисти продаж?`;
  if (navigator.share) {
    try {
      await navigator.share({ title: "Какой ты монстр продаж?", text, url: window.location.href });
      return;
    } catch (error) {
      if (error.name === "AbortError") return;
    }
  }
  await navigator.clipboard.writeText(`${text}\n${window.location.href}`);
  showToast("Результат и ссылка скопированы");
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = src;
  });
}

function fitContain(sourceWidth, sourceHeight, maxWidth, maxHeight) {
  const ratio = Math.min(maxWidth / sourceWidth, maxHeight / sourceHeight);
  return { width: sourceWidth * ratio, height: sourceHeight * ratio };
}

function roundRect(ctx, x, y, width, height, radius) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + width, y, x + width, y + height, r);
  ctx.arcTo(x + width, y + height, x, y + height, r);
  ctx.arcTo(x, y + height, x, y, r);
  ctx.arcTo(x, y, x + width, y, r);
  ctx.closePath();
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight, maxLines = Infinity) {
  const words = text.split(" ");
  let line = "";
  let lineCount = 0;
  for (let index = 0; index < words.length; index += 1) {
    const testLine = line ? `${line} ${words[index]}` : words[index];
    if (ctx.measureText(testLine).width > maxWidth && line) {
      ctx.fillText(line, x, y + lineCount * lineHeight);
      line = words[index];
      lineCount += 1;
      if (lineCount >= maxLines - 1) {
        const rest = [line, ...words.slice(index + 1)].join(" ");
        let clipped = rest;
        while (ctx.measureText(`${clipped}…`).width > maxWidth && clipped.length > 1) clipped = clipped.slice(0, -1);
        ctx.fillText(`${clipped}…`, x, y + lineCount * lineHeight);
        return;
      }
    } else {
      line = testLine;
    }
  }
  if (line) ctx.fillText(line, x, y + lineCount * lineHeight);
}

function showToast(message) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("visible");
  window.setTimeout(() => toast.classList.remove("visible"), 2400);
}

renderIntro();
