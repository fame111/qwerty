const TOKEN = " ece3053ab938447196481c9c906f0a1e41103a419fb958af141799ba245ea3e54f12a1d4692298a55dcfe ; // Токен группы, в которой будет стоять бот
const GROUP_ID = 202299061; // Айди группы, в которой будет стоять бот
const BTN_TEXT = ["vto.pe", "vkbot.ru", "vkbot.ru"];
const TIME = 300;
const CHAT_SPAM = [".МИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНАМИ ХАТИМ ИБАТТ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА МИ ХАТИМ ИБАТЬ КАБАНА", "😄😁😊😃🤣😆😉😜😋🤗😍😎😒😏🙂🙃😔😢😭😩😨😐😌🤤😇😰🤧😲🤢😳😷😂❤💋😚😕😯😦😵🙄🤔😠😡😝😴😘😗😙😟🙁☹😬😶🤐😫☺😄1�7😥😛😖😤😣😧😑😅😮😞😓😱🤓🤑😪🤒🤕🤥🤠😈👿👽👻😸😹😼😽😾😿😻🙀😺🙈🙉🙊💩💀👹👺👍👎☝✌👌🖕🏻🤘🏻👏👊💪✋🖐🏻🖖🏻🙏🙌✊👆👇👈👉👋👐🤞🏻🤝🤙🏻🤛🏻🤜🏻👀👂👃✍🏻👅👫👬👭💏💑👯👪👰👦👧👨👩👱👮👲👳💂👴👵👶👷👸👼🙇🤰🏻💅💄👄💃🎎🎅🚶👱�1�7�♀️👮�1�7�♀️👷�1�7�♀️🕵�1�7�♀️🙇�1�7�♀️🙋�1�7�♂️🙋💁�1�7�♂️💁🙅�1�7�♂️🙅🙆�1�7�♂️🙆🙎�1�7�♂️🙎💆�1�7�♂️💆💇�1�7�♂️💇🤷🏻�1�7�♂️🤷🏻�1�7�♀️🤦🏻�1�7�♂️🤦�1�7�♀️🙍�1�7�♂️🚶�1�7�♀️🤳🏻🏃�1�7�♀️👯�1�7�♂️🏌�1�7�♀️🐱🤡🕺👳�1�7�♀️💂�1�7�♀️🤵🤴🤹�1�7�♂️🤹�1�7�♀️👨�1�7�⚖️👩�1�7�⚖️👨�1�7�✈️👩�1�7�✈️👨�1�7�🚒️👩‍🚒️👨‍🎤️👩‍🎤️👨‍🎓️👩‍🎓️👨‍🏫️👩‍🏫️👨‍🌾️👩‍🌾️👨‍🍳️👩‍🍳️👨‍🔧️👩‍🔧️👨‍🏭️👩‍🏭️👨‍💼️👩‍💼️👨‍🔬️👩‍🔬️👨‍💻️👩‍💻️👨‍🎨️👩‍🎨️👨‍🚄1�7️👩�1�7�🚄1�7️👨�1�7�⚕️👩�1�7�⚕️💓💔💕💖💗💘💙💚💛💜💝💞💟💬💭🔞⚠⛔🐩🆘🌚🖤💨🔥☀☁⛄❄⛅✨🌍🌛🌝🌞☄🌈🌖⚕🌱🌲🌳🌴🌷🌸🍅🍆🍇🍈🍉🍊🍋🍌🍍🍎🍏🍐🍑🐄1�7🐁🐂🐃🐄🐅🐆🐇🐈🐉🐊🐋🐌🐍🐎🐏🐐🐑🐒🐓🐔🐕🐖🐗🐘🐙🐚🐛🐜🐝🐞🐟🐠🐡🐢🐣🐤🐥🐦🐧🐨🐪🐫🐬🐭🐮🐯🐰🐲🐳🐴🐵🐶🐷🐸🐹🐺🐻🐼🐽🐾🌰🌵🌹🌺🌻🌼🌽🌾🌿🍀🍁🍂🍃🍄💦💧🦉🦍🦏🦋🦊🦈🦆🦅🦇🦎🦐🦑🥀🦌🍒🍓🍔🍕🍖🍗🍚🍛🍜🍝🍧🍦🍥🍤🍣🍢🍡🍠🍟🍞🍨🍩🍪🍫🍬🍭🍮🍯🍰🍱🍻🍺🍹🍸🍷🍶🍵🍴🍳🍲🍼🥙🥝🥜🥘🥗🥖🥓🥐🥂🥛🥚🥞🥒🥔🥕🥃🥑⚽⚾🎯🎱🎽🎾🎿🏀🏁🏂🚴🚣👟🏊🏉🏈🏇🏆🏄🏃🚵⛳⛪🤽🏻‍♂️🤽🏻�1�7�♀️🤾🏻�1�7�♂️🤼�1�7�♂️🤸🏻�1�7�♂️🏋�1�7�♀️⛹‍♀️🥅🥋🥊🛶🛴🤺🚴�1�7�♀️🚵�1�7�♀️🏊�1�7�♀️🏄�1�7�♀️🥁🚅🚆🚇🚈🚊🚌🚍🚎🚏🚐🚚🚙🚘🚗🚖🚕🚔🚓🚒🚑🚛🚜🚝🚞🚟🚠🚡🚤🚨🚧🛵🏜✈⛽🚄🚃🚂🚁🚄1�7⛵⏰⏳☎☕♻⚡✂✉✏✒🎈🎄🎃🎂🎁🎄1�7🌟🌂🃏�1�7�🎉🎊🎋🎌🎍🎏🎐🎒🎓🎣🎲🎰🎭🎬🎫🎪🎩🎨🎧🎤🎳🎴🎷🎸🎹🎺🎻👑👒👓👜👠👛👚👙👘👗👖👕👔👝👞👡👢👣👾💈💉💊💌💴💳💰💥💣💡💒💐💎💍💵💶💷💸💺💻💼💽💾💿📎📍📌📋📊📉📈📇📅📄📐📑📒📓📔📕📖📗📘📙📮📭📦📢📡📠📟📝📜📚📯🔑🔭🥇🥈🔮🔔📰📱🔖🔱🥉🛒🗿🔦📷📹🔧🚪🚬🔨📺📻🔩🚽🚿🔪📼🔆🔫🛄1�7🥄🔬🔎🇨🇳🇺🇦🇮🇱🇳🇿🇫🇮🇮🇷🇹🇳🇲🇦🇨🇱🇳🇴🇮🇳🇰🇿🇩🇪🇪🇸🇧🇾🇮🇩🇦🇪🇨🇭🇳🇬🇵🇦🇸🇪🇵🇱🇮🇪🇦🇺🇫🇷🇬🇧🇦🇹🇨🇦🇵🇹🇿🇦🇵🇪🇷🇸🏳‍🌈️🇵🇷🇨🇴🇧🇪🇮🇹🇯🇵🇧🇷🇲🇴🇸🇦🇦🇷🇸🇳🏴󠁧󠁢󠁥󠁮󠁧󠁿🇨🇷🏴󠁧󠁢󠁥󠁮󠁧󠁿🇨🇷🇸🇬🇲🇾🇻🇳🇰🇷🇷🇺🇭🇰🇲🇽🇹🇷🇪🇬🇺🇾🇮🇸🇭🇷🇵🇭🇳🇱🇩🇰🇩🇰🇺🇸😄😁😊😃🤣😆😉😜😋🤗😍😎😒😏🙂🙃😔😢😭😩😨😐😌🤤😇😰🤧😲🤢😳😷😂❤💋😚😕😯😦😵🙄🤔😠😡😝😴😘😗😙😟🙁☹😬😶🤐😫☺😄1�7😥😛😖😤😣😧😑😅😮😞😓😱🤓🤑😪🤒🤕🤥🤠😈👿👽👻😸😹😼😽😾😿😻🙀😺🙈🙉🙊💩💀👹👺👍👎☝✌👌🖕🏻🤘🏻👏👊💪✋🖐🏻🖖🏻🙏🙌✊👆👇👈👉👋👐🤞🏻🤝🤙🏻🤛🏻🤜🏻👀👂👃✍🏻👅👫👬👭💏💑👯👪👰👦👧👨👩👱👮👲👳💂👴👵👶👷👸👼🙇🤰🏻💅💄👄💃🎎🎅🚶👱�1�7�♀️👮�1�7�♀️👷�1�7�♀️🕵�1�7�♀️🙇�1�7�♀️🙋�1�7�♂️🙋💁�1�7�♂️💁🙅�1�7�♂️🙅🙆�1�7�♂️🙆🙎�1�7�♂️🙎💆�1�7�♂️💆💇�1�7�♂️💇🤷🏻�1�7�♂️🤷🏻�1�7�♀️🤦🏻�1�7�♂️🤦�1�7�♀️🙍�1�7�♂️🚶�1�7�♀️🤳🏻🏃�1�7�♀️👯�1�7�♂️🏌�1�7�♀️🐱🤡🕺👳�1�7�♀️💂�1�7�♀️🤵🤴🤹�1�7�♂️🤹�1�7�♀️👨�1�7�⚖️👩�1�7�⚖️👨�1�7�✈️👩�1�7�✈️👨�1�7�🚒️👩‍🚒️👨‍🎤️👩‍🎤️👨‍🎓️👩‍🎓️👨‍🏫️👩‍🏫️👨‍🌾️👩‍🌾️👨‍🍳️👩‍🍳️👨‍🔧️👩‍🔧️👨‍🏭️👩‍🏭️👨‍💼️👩‍💼️👨‍🔬️👩‍🔬️👨‍💻️👩‍💻️👨‍🎨️👩‍🎨️👨‍🚄1�7️👩�1�7�🚄1�7️👨�1�7�⚕️👩�1�7�⚕️💓💔💕💖💗💘💙💚💛💜💝💞💟💬💭🔞⚠⛔🐩🆘🌚🖤💨🔥☀☁⛄❄⛅✨🌍🌛🌝🌞☄🌈🌖⚕🌱🌲🌳🌴🌷🌸🍅🍆🍇🍈🍉🍊🍋🍌🍍🍎🍏🍐🍑🐄1�7🐁🐂🐃🐄🐅🐆🐇🐈🐉🐊🐋🐌🐍🐎🐏🐐🐑🐒🐓🐔🐕🐖🐗🐘🐙🐚🐛🐜🐝🐞🐟🐠🐡🐢🐣🐤🐥🐦🐧🐨🐪🐫🐬🐭🐮🐯🐰🐲🐳🐴🐵🐶🐷🐸🐹🐺🐻🐼🐽🐾🌰🌵🌹🌺🌻🌼🌽🌾🌿🍀🍁🍂🍃🍄💦💧🦉🦍🦏🦋🦊🦈🦆🦅🦇🦎🦐🦑🥀🦌🍒🍓🍔🍕🍖🍗🍚🍛🍜🍝🍧🍦🍥🍤🍣🍢🍡🍠🍟🍞🍨🍩🍪🍫🍬🍭🍮🍯🍰🍱🍻🍺🍹🍸🍷🍶🍵🍴🍳🍲🍼🥙🥝🥜🥘🥗🥖🥓🥐🥂🥛🥚🥞🥒🥔🥕🥃🥑⚽⚾🎯🎱🎽🎾🎿🏀🏁🏂🚴🚣👟🏊🏉🏈🏇🏆🏄🏃🚵⛳⛪🤽🏻‍♂️🤽🏻�1�7�♀️🤾🏻�1�7�♂️🤼�1�7�♂️🤸🏻�1�7�♂️🏋�1�7�♀️⛹‍♀️🥅🥋🥊🛶🛴🤺🚴�1�7�♀️🚵�1�7�♀️🏊�1�7�♀️🏄�1�7�♀️🥁🚅🚆🚇🚈🚊🚌🚍🚎🚏🚐🚚🚙🚘🚗🚖🚕🚔🚓🚒🚑🚛🚜🚝🚞🚟🚠🚡🚤🚨🚧🛵🏜✈⛽🚄🚃🚂🚁🚄1�7⛵⏰⏳☎☕♻⚡✂✉✏✒🎈🎄🎃🎂🎁🎄1�7🌟🌂🃏�1�7�🎉🎊🎋🎌🎍🎏🎐🎒🎓🎣🎲🎰🎭🎬🎫🎪🎩🎨🎧🎤🎳🎴🎷🎸🎹🎺🎻👑👒👓👜👠👛👚👙👘👗👖👕👔👝👞КЄ1�7 ОТ ПИЗДЕЦ РП ШАВКИ НАХУЙ ЕБАНЫЕ😆 😆", "卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卄1�7"];
const HELLO_TEXT = `deadrose bot.
`;

module.exports = {
    TOKEN, CHAT_SPAM, GROUP_ID, BTN_TEXT, HELLO_TEXT, TIME
};
