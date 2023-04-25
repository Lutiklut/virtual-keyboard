var textarea = document.createElement("textarea");
    //var t = document.createTextNode("your text");
textarea.setAttribute('style','color:black; border: 1px solid black; width:800px;height:300px; margin:20px auto;display:flex;')
   // textarea.appendChild(t);
document.body.appendChild(textarea);
   
var letter = document.createElement("div");
    //var t = document.createTextNode("your text");
letter.classList.add('letter-holder')
document.body.appendChild(letter);
    

   // let keybord=['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight', 'ControlLeft', 'MetaLeft'];
let keybord=['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'Alt', 'Control', 'ArrowLeft', 'ArrowUp', 'ArrowRight'];
let keybordShift=['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'Alt', 'Control', 'ArrowLeft', 'ArrowUp', 'ArrowRight'];
let keybordCaps=['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'Alt', 'Control', 'ArrowLeft', 'ArrowUp', 'ArrowRight'];

//    document.onkeydown=function(e){
//         keybord.push(e.key);
//         console.log(keybord)
//     }

function init(keybord){
    let out='';
    for (let i=0;i<keybord.length;i++){
      if (keybord[i]==='Backspace'){out+='<div class="key backspace">'+String( keybord[i])+'</div>'}
      else if (keybord[i]==='Tab'){out+='<div class="key tab">'+String( keybord[i])+'</div>'}
      else if (keybord[i]==='CapsLock'){out+='<div class="key caps">'+String( keybord[i])+'</div>'}
      else if (keybord[i]==='Shift'){out+='<div class="key shift">'+String( keybord[i])+'</div>'}
      else if (keybord[i]==='Enter'){out+='<div class="key enter">'+String( keybord[i])+'</div>'}
      else if (keybord[i]==='Control'){out+='<div class="key ctrl">'+String( 'Ctrl')+'</div>'}
      else if (keybord[i]==='Alt'){out+='<div class="key alt">'+String( keybord[i])+'</div>'}
      else if (keybord[i]==='Meta'){out+='<div class="key meta">'+String( keybord[i])+'</div>'}
      else if (keybord[i]===' '){out+='<div class="key space">'+String( keybord[i])+'</div>'}
      else if (keybord[i]==='ArrowUp'){out+='<div class="key arrow">'+'<div class="up">'+String('▲')+'</div>'+'<div class="dawn">'+String('▼')+'</div>'+'</div>'}
      else if (keybord[i]==='ArrowLeft'){out+='<div class="key">'+String('◀')+'</div>'}
      else if (keybord[i]==='ArrowRight'){out+='<div class="key">'+String('▶')+'</div>'}
      else{out+='<div class="key">'+String( keybord[i])+'</div>'}
    } 
    letter.innerHTML=(out);
   }
  init (keybord)

document.addEventListener('keyup', function(event) {
  if (event.key == 'Shift'||keybord[i]==='Shift' ) {init(keybord) }
    for (let i=0;i<keybord.length;i++){
      
      }}
  );
  
document.addEventListener('keydown', function(event) {
   if (event.key == 'Shift'||keybordShift[i]==='Shift' ) {init(keybordShift) }
    for (let i=0;i<keybordShift.length;i++){
       
        }}
    );
  
  document.addEventListener('', function(event) {
 if (event.key == 'CapsLock'||keybordCaps[i]==='CapsLock' ) {init(keybordCaps) }
      for (let i=0;i<keybordCaps.length;i++){
        
        }}
    );
 
document.addEventListener('keydown', function(event) {
  
      for (let i=0;i<keybordShift.length;i++){
        if(event.key==='Shift'||event.key==='CapsLock'||event.key==='Control'||event.key==='Tab'){ }
      else{textarea.appendChild('event.key')}}}
);
document.addEventListener('click', function(event) {
  
    for (let i=0;i<keybordShift.length;i++){
      if(keybordShift[i]==='CapsLock'){ init(keybordCaps) }}}
    
);


// [{"code":"Backquote",
// "ENG":{"first_symbol":"`","second_symbol":"~"},
// "RU":{"first_symbol":"Ё"}},
//  {"code":"Digit1",
//  "first_symbol":"1",
//  "second_symbol":"!"},
//  {"code":"Digit2",
//   "first_symbol":"2",
//   "ENG":{"second_symbol":"@"},
//   "RU":{"second_symbol":"\\""}},
//  {"code":"Digit3",
//  "first_symbol":"3",
//  "ENG":{"second_symbol":"#"},
//  "RU":{"second_symbol":"№"}},
//  {"code":"Digit4", 
//  "first_symbol":"4",
//  "ENG":{"second_symbol":"$"},
//  "RU":{"second_symbol":";"}},
//  {"code":"Digit5","first_symbol":"5",
//  "second_symbol":"%"},
//  {"code":"Digit6",
//  "first_symbol":"6",
//  "ENG":{"second_symbol":"^"},
//  "RU":{"second_symbol":":"}},
//  {"code":"Digit7",
//  "first_symbol":"7",
//  "ENG":{"second_symbol":"&"},
//  "RU":{"second_symbol":"?"}},
//  {"code":"Digit8",
//  "first_symbol":"8",
//  "second_symbol":"*"},
//  {"code":"Digit9",
//  "first_symbol":"9",
//  "second_symbol":"("},
//  {"code":"Digit0",
//  "first_symbol":"0",
//  "second_symbol":")"},
//  {"code":"Minus",
//  "first_symbol":"-",
//  "second_symbol":"_"},
//  {"code":"Equal",
//  "first_symbol":"=",
//  "second_symbol":"+"},
//  {"code":"Backspace","first_symbol":"Backspace"}],
 
//  [{"code":"Tab",
//  "first_symbol":"Tab"},
//  {"code":"KeyQ",
//  "ENG":{"first_symbol":"Q"},
//  "RU":{"first_symbol":"Й"}},
//  {"code":"KeyW",
//  "ENG":{"first_symbol":"W"},
//  "RU":{"first_symbol":"Ц"}},
//  {"code":"KeyE",
//  "ENG":{"first_symbol":"E"},
//  "RU":{"first_symbol":"У"}},
//  {"code":"KeyR",
//  "ENG":{"first_symbol":"R"},
//  "RU":{"first_symbol":"К"}},
//  {"code":"KeyT",
//  "ENG":{"first_symbol":"T"},
//  "RU":{"first_symbol":"Е"}},
//  {"code":"KeyY",
//  "ENG":{"first_symbol":"Y"},
//  "RU":{"first_symbol":"Н"}},
//  {"code":"KeyU",
//  "ENG":{"first_symbol":"U"},
//  "RU":{"first_symbol":"Г"}},
//  {"code":"KeyI",
//  "ENG":{"first_symbol":"I"},
//  "RU":{"first_symbol":"Ш"}},
//  {"code":"KeyO",
//  "ENG":{"first_symbol":"O"},
//  "RU":{"first_symbol":"Щ"}},
//  {"code":"KeyP",
//  "ENG":{"first_symbol":"P"},
//  "RU":{"first_symbol":"З"}},
//  {"code":"BracketLeft",
//  "ENG":{"first_symbol":"["},
//  "RU":{"first_symbol":"Х"}},
//  {"code":"BracketRight",
//  "ENG":{"first_symbol":"]"},
//  "RU":{"first_symbol":"Ъ"}},
//  {"code":"Backslash",
//  "first_symbol":"\\\\",
//  "second_symbol":"/"}],
//  [{"code":"CapsLock",
//  "first_symbol":"Caps Lock"},
//  {"code":"KeyA",
//  "ENG":{"first_symbol":"A"},
//  "RU":{"first_symbol":"Ф"}},
//  {"code":"KeyS",
//  "ENG":{"first_symbol":"S"},
//  "RU":{"first_symbol":"Ы"}},
//  {"code":"KeyD",
//  "ENG":{"first_symbol":"D"},
//  "RU":{"first_symbol":"В"}},
//  {"code":"KeyF",
//  "ENG":{"first_symbol":"F"},
//  "RU":{"first_symbol":"А"}},
//  {"code":"KeyG",
//  "ENG":{"first_symbol":"G"},
//  "RU":{"first_symbol":"П"}},
//  {"code":"KeyH",
//  "ENG":{"first_symbol":"H"},
//  "RU":{"first_symbol":"Р"}},
//  {"code":"KeyJ",
//  "ENG":{"first_symbol":"J"},
//  "RU":{"first_symbol":"О"}},
//  {"code":"KeyK",
//  "ENG":{"first_symbol":"K"},
//  "RU":{"first_symbol":"Л"}},
//  {"code":"KeyL",
//  "ENG":{"first_symbol":"L"},
//  "RU":{"first_symbol":"Д"}},
//  {"code":"Semicolon",
//  "ENG":{"first_symbol":":"},
//  "RU":{"first_symbol":"Ж"}},
//  {"code":"Quote",
//  "ENG":{"first_symbol":"\'"},
//  "RU":{"first_symbol":"Э"}},
//  {"code":"Enter",
//  "first_symbol":"Enter"}],
//  [{"code":"ShiftLeft",
//  "first_symbol":"Shift"},
//  {"code":"KeyZ",
//  "ENG":{"first_symbol":"Z"},
//  "RU":{"first_symbol":"Я"}},
//  {"code":"KeyX",
//  "ENG":{"first_symbol":"X"},
//  "RU":{"first_symbol":"Ч"}},
//  {"code":"KeyC",
//  "ENG":{"first_symbol":"C"},
//  "RU":{"first_symbol":"С"}},
//  {"code":"KeyV",
//  "ENG":{"first_symbol":"V"},
//  "RU":{"first_symbol":"М"}},
//  {"code":"KeyB",
//  "ENG":{"first_symbol":"B"},
//  "RU":{"first_symbol":"И"}},
//  {"code":"KeyN",
//  "ENG":{"first_symbol":"N"},
//  "RU":{"first_symbol":"Т"}},
//  {"code":"KeyM",
//  "ENG":{"first_symbol":"M"},
//  "RU":{"first_symbol":"Ь"}},
//  {"code":"Period",
//  "ENG":{"first_symbol":"."},
//  "RU":{"first_symbol":"Ю"}},
//  {"code":"Comma",
//  "ENG":{"first_symbol":","},
//  "RU":{"first_symbol":"Б"}},
//  {"code":"Slash",
//  "ENG":{"first_symbol":"/"},
//  "RU":{"first_symbol":"."}},
//  {"code":"ArrowUp",
//  "first_symbol":"▲"},
//  {"code":"ShiftRight",
//  "first_symbol":"Shift"}],
//  [{"code":"ControlLeft",
//  "first_symbol":"Ctrl"},
//  {"code":"MetaLeft",
//  "first_symbol":"Win"},
//  {"code":"AltLeft",
//  "first_symbol":"Alt"},
//  {"code":"Space",
//  "first_symbol":"Space"},
//  {"code":"AltRight",
//  "first_symbol":"Alt"},
//  {"code":"ControlRight",
//  "first_symbol":"Ctrl"},
//  {"code":"ArrowLeft",
//  "first_symbol":"◀"},
//  {"code":"ArrowDown",
//  "first_symbol":"▼"},
//  {"code":"ArrowRight",
//  "first_symbol":"▶"}]]')}},t={};
