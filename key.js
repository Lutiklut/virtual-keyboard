var textarea = document.createElement("textarea");
    //var t = document.createTextNode("your text");
textarea.setAttribute('style','color:black; border: 1px solid black; width:800px;height:300px; margin:20px auto;display:flex;')
   // textarea.appendChild(t);
document.body.appendChild(textarea);
   
var letter = document.createElement("div");
    //var t = document.createTextNode("your text");
letter.classList.add('letter-holder')
document.body.appendChild(letter);
    
//let cod=[];
   // let keybord=['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight', 'ControlLeft', 'MetaLeft'];
// let keybord=['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/','ArrowUp', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'Alt', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Control'];
// let keybordShift=['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?','ArrowUp', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'Alt', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Control'];
// let keybordCaps=['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/','ArrowUp', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'Alt', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Control'];

//    document.onkeydown=function(e){
//     cod.push(e.key);
   
//         console.log(cod)

//     }
let en=[
    {
      small: '`',
      shift: '~',
      code: 'Backquote',
    },
    {
      small: '1',
      shift: '!',
      code: 'Digit1',
    },
    {
      small: '2',
      shift: '@',
      code: 'Digit2',
    },
    {
      small: '3',
      shift: '#',
      code: 'Digit3',
    },
    {
      small: '4',
      shift: '$',
      code: 'Digit4',
    },
    {
      small: '5',
      shift: '%',
      code: 'Digit5',
    },
    {
      small: '6',
      shift: '^',
      code:'Digit6'
    },
    {
      small: '7',
      shift: '&',
      code: 'Digit7',
    },
    {
      small: '8',
      shift: '*',
      code: 'Digit8',
    },
    {
      small: '9',
      shift: '(',
      code: 'Digit9',
    },
    {
      small: '0',
      shift: ')',
      code: 'Digit0',
    },
    {
      small: '-',
      shift: '_',
      code: 'Minus',
    },
    {
      small: '=',
      shift: '+',
      code: 'Equal',
    },
    {
      small: 'Backspace',
      code: 'Backspace',
    },
    {
      small: 'Tab',
      code: 'Tab',
    },
    {
      small: 'q',
      code: 'KeyQ',
    },
    {
      small: 'w',
      code: 'KeyW',
    },
    {
      small: 'e',
      code: 'KeyE',
    },
    {
      small: 'r',
      code: 'KeyR',
    },
    {
      small: 't',
      code: 'KeyT',
    },
    {
      small: 'y',
      code: 'KeyY',
    },
    {
      small: 'u',
      code: 'KeyU',
    },
    {
      small: 'i',
      code: 'KeyI',
    },
    {
      small: 'o',
      code: 'KeyO',
    },
    {
      small: 'p',
      code: 'KeyP',
    },
    {
      small: '[',
      shift: '{',
      code: 'BracketLeft',
    },
    {
      small: ']',
      shift: '}',
      code: 'BracketRight',
    },
    {
        small: '\\',
        shift: '|',
        code: 'Backslash',
    },
  
    {
      small: 'CapsLock',
      code: 'CapsLock',
    },
    {
      small: 'a',

      code: 'KeyA',
    },
    {
      small: 's',
      code: 'KeyS',
    },
    {
      small: 'd',
      code: 'KeyD',
    },
    {
      small: 'f',
      code: 'KeyF',
    },
    {
      small: 'g',
      code: 'KeyG',
    },
    {
      small: 'h',
      code: 'KeyH',
    },
    {
      small: 'j',
      code: 'KeyJ',
    },
    {
      small: 'k',
      code: 'KeyK',
    },
    {
      small: 'l',
      code: 'KeyL',
    },
    {
      small: ';',
      shift: ':',
      code: 'Semicolon',
    },
    {
      small: "'",
      shift: '"',
      code: 'Quote',

    },
    {
      small: 'Enter',
      code: 'Enter',
      },
    {
      small: 'Shift',
      code: 'ShiftLeft',
    },
 
    {
      small: 'z',
      code: 'KeyZ',
    },
    {
      small: 'x',
      code: 'KeyX',
    },
    {
      small: 'c',
      code: 'KeyC',
    },
    {
      small: 'v',
      code: 'KeyV',
    },
    {
      small: 'b',
      code: 'KeyB',
    },
    {
      small: 'n',
      code: 'KeyN',
    },
    {
      small: 'm',
      code: 'KeyM',
    },
    {
      small: ',',
      shift: '<',
      code: 'Comma',

    },
   
    {
      small: '.',
      shift: '>',
      code: 'Period',
    },
    {
      small: '/',
      shift: '?',
      code: 'Slash',
    }, {
      small: '&uarr;',
      shift: '&uarr;',
      code: 'ArrowUp',
    },
    {
      small: 'Shift',
      shift: 'Shift',
      code: 'ShiftRight',
    },

   

    {
      small: 'Ctrl',
      code: 'ControlLeft',
    },
    {
      small: 'Mic',
      code: 'Mic',
    },
    {
      small: 'Alt',
      code: 'AltLeft',
    },
    {
      small: ' ',
      shift: ' ',
      code: 'Space',
    },
    {
      small: 'Alt',
      code: 'AltRight',
    },
    {
      small: 'Ctrl',
      code: 'ControlRight',
    },
    {
      small: '&larr;',
      code: 'ArrowLeft',
    },
    
    {
      small: '&darr;',
      code: 'ArrowDown',
    },
    {
      small: '&rarr;',
      code: 'ArrowRight',
    },
    
  ];
let ru=[
 
  {
    small: 'ё',
    code: 'Backquote',
  },
  {
    small: '1',
    shift: '!',
    code: 'Digit1',
  },
  {
    small: '2',
    shift: '"',
    code: 'Digit2',
  },
  {
    small: '3',
    shift: '№',
    code: 'Digit3',
  },
  {
    small: '4',
    shift: ';',
    code: 'Digit4',
  },
  {
    small: '5',
    shift: '%',
    code: 'Digit5',
  },
  {
    small: '6',
    shift: ':',
    code: 'Digit6',
  },
  {
    small: '7',
    shift: '?',
    code: 'Digit7',
  },
  {
    small: '8',
    shift: '*',
    code: 'Digit8',
  },
  {
    small: '9',
    shift: '(',
    code: 'Digit9',
  },
  {
    small: '0',
    shift: ')',
    code: 'Digit0',
  },
  {
    small: '-',
    shift: '_',
    code: 'Minus',
  },
  {
    small: '=',
    shift: '+',
    code: 'Equal',
  },
  {
    small: 'Backspace',
    code: 'Backspace',
  },
  {
    small: 'Tab',
    code: 'Tab',
  },
  {
    small: 'й',
    code: 'KeyQ',
  },
  {
    small: 'ц',
    code: 'KeyW',
  },
  {
    small: 'у',
    code: 'KeyE',
  },
  {
    small: 'к',
    code: 'KeyR',
  },
  {
    small: 'e',
    code: 'KeyT',
  },
  {
    small: 'н',
    code: 'KeyY',
  },
  {
    small: 'г',
    code: 'KeyU',
  },
  {
    small: 'ш',
    code: 'KeyI',
  },
  {
    small: 'щ',
    code: 'KeyO',
  },
  {
    small: 'з',
    code: 'KeyP',
  },
  {
    small: 'х',
    code: 'BracketLeft',
  },
  {
    small: 'ъ',
    code: 'BracketRight',
  }, 
  {
    small: '\\',
    code: 'Backslash',
  },

  {
    small: 'CapsLock',
    code: 'CapsLock',
  },
 
  {
    small: 'ф',
    code: 'KeyA',
  },
  {
    small: 'ы',
    code: 'KeyS',
  },
  {
    small: 'в',
    code: 'KeyD',
  },
  {
    small: 'а',
    code: 'KeyF',
  },
  {
    small: 'п',
    code: 'KeyG',
  },
  {
    small: 'р',
    code: 'KeyH',
  },
  {
    small: 'о',
    code: 'KeyJ',
  },
  {
    small: 'л',
    code: 'KeyK',
  },
  {
    small: 'д',
    code: 'KeyL',
  },
  {
    small: 'ж',
    code: 'Semicolon',
  },
  {
    small: 'э',
    code: 'Quote',
  },
  {
    small: 'Enter',
    code: 'Enter',
  },
  {
    small: 'Shift',
    code: 'ShiftLeft',
  },

  {
    small: 'я',
    code: 'KeyZ',
  },
  {
    small: 'ч',
    code: 'KeyX',
  },
  {
    small: 'с',
    code: 'KeyC',
  },
  {
    small: 'м',
    code: 'KeyV',
  },
  {
    small: 'и',
    code: 'KeyB',
  },
  {
    small: 'т',
    code: 'KeyN',
  },
  {
    small: 'ь',
    code: 'KeyM',
  },
  {
    small: 'б',
    code: 'Comma',
  },
  {
    small: 'ю',
    code: 'Period',
  },
  {
    small: '.',
    shift: ',',
    code: 'Slash',
  },
  {
    small: '&uarr;',
    code: 'ArrowUp',
  },
  {
    small: 'Shift',
    code: 'ShiftRight',
  },
  {
    small: 'Ctrl',
    code: 'ControlLeft',
  },
  {
    small: 'Mic',
    code: 'Mic',
  },

  {
    small: 'Alt',
    code: 'AltLeft',
  },
  {
    small: ' ',
    code: 'Space',
  },
  {
    small: 'Alt',
    code: 'AltRight',
  },
  {
    small: 'Ctrl',
    code: 'ControlRight',
  },
  {
    small: '&larr;',
    code: 'ArrowLeft',
  },
 
  {
    small: '&darr;',
    code: 'ArrowDown',
  },
  {
    small: '&rarr;',
    code: 'ArrowRight',
  },
 
];

function init(keybord,keyru){
    let out='';
    for (let i=0;i<keybord.length;i++){
      if (keybord[i].code==='Backspace'){out+='<div class="key backspace" data="'+keybord[i].code+'">'+String( keybord[i].small)+'</div>'}
      else if (keybord[i].code==='Tab'){out+='<div class="key tab" data="'+keybord[i].code+'">'+String( keybord[i].small)+'</div>'}
      else if (keybord[i].code==='CapsLock'){out+='<div class="key caps" data="'+keybord[i].code+'">'+String( keybord[i].small)+'</div>'}
      else if (keybord[i].code==='ShiftLeft'){out+='<div class="key shift-left" data="'+keybord[i].code+'">'+String( keybord[i].small)+'</div>'}
      else if (keybord[i].code==='ShiftRight'){out+='<div class="key shift-right" data="'+keybord[i].code+'">'+String( keybord[i].small)+'</div>'}
      else if (keybord[i].code==='Enter'){out+='<div class="key enter" data="'+keybord[i].code+'">'+String( keybord[i].small)+'</div>'}
      else if (keybord[i].code==='ControlLeft'){out+='<div class="key ctrl-left" data="'+keybord[i].code+'">'+String( keybord[i].small)+'</div>'}
      else if (keybord[i].code==='ControlRight'){out+='<div class="key ctrl-right" data="'+keybord[i].code+'">'+String( keybord[i].small)+'</div>'}
      else if (keybord[i].code==='Alt'){out+='<div class="key alt" data="'+keybord[i].code+'">'+String( keybord[i].small)+'</div>'}
      else if (keybord[i].code==='Mic'){out+='<div class="key meta" data="'+keybord[i].code+'">'+String( keybord[i].small)+'</div>'}
      else if (keybord[i].code==='AltLeft'){out+='<div class="key meta" data="'+keybord[i].code+'">'+String( keybord[i].small)+'</div>'}
      else if (keybord[i].code==='AltRight'){out+='<div class="key meta" data="'+keybord[i].code+'">'+String( keybord[i].small)+'</div>'}
      else if (keybord[i].code==='Space'){out+='<div class="key space" data="'+keybord[i].code+'">'+String(keybord[i].small)+'</div>'}
      else if (keybord[i].code==='ArrowUp'){out+='<div class="key" data="'+keybord[i].code+'">'+String(keybord[i].small)+'</div>'}
      else if (keybord[i].code==='ArrowDown'){out+='<div class="key" data="'+keybord[i].code+'">'+String(keybord[i].small)+'</div>'}
      else if (keybord[i].code==='ArrowLeft'){out+='<div class="key" data="'+keybord[i].code+'">'+String(keybord[i].small)+'</div>'}
      else if (keybord[i].code==='ArrowRight'){out+='<div class="key" data="'+keybord[i].code+'">'+String(keybord[i].small)+'</div>'}


      else if (keybord[i].code==='Slash'){out+='<div class="key" data="'+keybord[i].code+'" data-symbol-en="'+keybord[i].small+'" data-en-shift="'+keybord[i].shift+'" data-symbol-ru="'+keyru[i].small+'" data-ru-shift="'+keyru[i].shift+'">'+String(keybord[i].small)+'</div>'}
      else if (keybord[i].code==='Minus'){out+='<div class="key" data="'+keybord[i].code+'" data-number="'+keybord[i].small+'" data-symbol="'+keybord[i].shift+'">'+String(keybord[i].small)+'</div>'}
      else if (keybord[i].code==='Equal'){out+='<div class="key" data="'+keybord[i].code+'" data-number="'+keybord[i].small+'" data-symbol="'+keybord[i].shift+'">'+String(keybord[i].small)+'</div>'}
      else if (keybord[i].code==='Backquote'){out+='<div class="key" data="'+keybord[i].code+'" data-en="'+keybord[i].small+'" data-shift="'+keybord[i].shift+'" data-ru="'+keyru[i].small+'">'+String(keybord[i].small)+'</div>'}
      else if(Number( keybord[i].small)||keybord[i].small==='0'){if ( [2,3,4,6,7].includes(Number(keybord[i].small))) {
        out+='<div class="key" data="'+keybord[i].code+'" data-number="'+keybord[i].small+'" data-symbol="'+keybord[i].shift+'" data-symbol-ru="'+keyru[i].shift+'">'+String(keybord[i].small)+'</div>'
      }
       else{ out+='<div class="key" data="'+keybord[i].code+'" data-number="'+keybord[i].small+'" data-symbol="'+keybord[i].shift+'">'+String(keybord[i].small)+'</div>'}}
      else{out+='<div class="key" data="'+keybord[i].code+'" data-en="'+keybord[i].small+'" data-ru="'+keyru[i].small+'">'+String( keybord[i].small)+'</div>'}
    } 
    letter.innerHTML=(out);
   }


   /// let klava=init(en); 
  // function initShift(keybord){
    let out='';
 //   for (let i=0;i<keybord.length;i++){
//       if (keybord[i].code==='Backspace'){out+='<div class="key backspace" data="'+keybord[i].code+'">'+String( keybord[i].shift)+'</div>'}
//       else if (keybord[i].code==='Tab'){out+='<div class="key tab" data="'+keybord[i].code+'" >'+String( keybord[i].shift)+'</div>'}
//       else if (keybord[i].code==='CapsLock'){out+='<div class="key caps" data="'+keybord[i].code+'" >'+String( keybord[i].shift)+'</div>'}
//       else if (keybord[i].code==='ShiftLeft'){out+='<div class="key shift-left" data="'+keybord[i].code+'">'+String( keybord[i].shift)+'</div>'}
//       else if (keybord[i].code==='ShiftRight'){out+='<div class="key shift-right" data="'+keybord[i].code+'">'+String( keybord[i].shift)+'</div>'}
//       else if (keybord[i].code==='Enter'){out+='<div class="key enter" data="'+keybord[i].code+'">'+String( keybord[i].shift)+'</div>'}
//       else if (keybord[i].code==='ControlLeft'){out+='<div class="key ctrl-left" data="'+keybord[i].code+'">'+String( keybord[i].small)+'</div>'}
//       else if (keybord[i].code==='ControlRight'){out+='<div class="key ctrl-right" data="'+keybord[i].code+'">'+String( keybord[i].shift)+'</div>'}
//       else if (keybord[i].code==='Alt'){out+='<div class="key alt" data="'+keybord[i].code+'">'+String( keybord[i].shift)+'</div>'}
//       else if (keybord[i].code==='Meta'){out+='<div class="key meta" data="'+keybord[i].code+'">'+String( keybord[i].shift)+'</div>'}
//       else if (keybord[i].code==='Space'){out+='<div class="key space" data="'+keybord[i].code+'">'+String(keybord[i].shift)+'</div>'}
//       else if (keybord[i].code==='ArrowUp'){out+='<div class="key" data="'+keybord[i].code+'">'+String(keybord[i].shift)+'</div>'}
//       else if (keybord[i].code==='ArrowDown'){out+='<div class="key" data="'+keybord[i].code+'">'+String(keybord[i].shift)+'</div>'}
//       else if (keybord[i].code==='ArrowLeft'){out+='<div class="key" data="'+keybord[i].code+'">'+String(keybord[i].shift)+'</div>'}
//       else if (keybord[i].code==='ArrowRight'){out+='<div class="key" data="'+keybord[i].code+'">'+String(keybord[i].shift)+'</div>'}
//       else{out+='<div class="key" data="'+keybord[i].code+'" >'+String( keybord[i].shift)+'</div>'}
//  //   } 
 //   letter.innerHTML=(out);
//}

  init(en,ru)
//if (ch === ch.toUpperCase()){}
// for(let i=0;i<letter.children.length;i++){
//     console.log(letter.children[i])
// if (letter.children[i].classList.contains('shift-left')){ console.log(1)} 
// }


//--------------
// document.addEventListener('mouseup', function(event) {
//     //const code = target.getAttribute("data");
//     console.log(letter);
//     for(let i=0; i<letter.children.length; i++) {
    
//         if (letter.children[i].classList.contains('shift-left')) {
//             console.log(letter.children[i]);
//             init(en); console.log(letter.children[i]);
//         } 
// }})
// -------------- 
    
// if (1){
// const code = target.getAttribute("data");
 //console.log(letter.children)
// }
// for(let i=0;i<letter.children.length;i++){
//     let child =letter.children[i];
//     child.addEventListener('mouseup', function() {
//         console.log("--> Mouse UP!!!!");
//         if(child.classList.contains('shift-right')|| child.classList.contains('shift-left')) {
//             init(en)
//         }
//     });
//     console.log("child: " + child.classList);   
// }  
for(let i=0;i<letter.children.length;i++){

    let child =letter.children[i];
    let data=child.getAttribute('data'); 
    let dataRu=child.getAttribute('data-ru'); 
    let dataEт=child.getAttribute('data-en');
    let dataShift= child.getAttribute('data-shift');
    let dataSymbolRu= child.getAttribute('data-symbol-ru');
    console.log( dataSymbolRu);
}


for(let i=0;i<letter.children.length;i++){

    let child =letter.children[i];
    child.addEventListener('mousedown', function() {
        if(child.classList.contains('shift-right') || child.classList.contains('shift-left')) {
            console.log("--> Mouse DOWN!!!")
            initShift(en)
        }
    });

    child.addEventListener('mouseup', function() {
        console.log("--> Mouse UP!!!!");
        if(child.classList.contains('shift-right')|| child.classList.contains('shift-left')) {
            console.log("xxxxxxx")
            initShift(en)
        }
    });
}




// document.addEventListener('mousedown', function(event) {
//     //const code = target.getAttribute("data");
//     for(let i=0;i<letter.children.length;i++){
//     //console.log(letter.children[i])
//     if (letter.children[i].classList.contains('shift-left')){ initShift(en); console.log(letter.children[i])} 
// }})



//console.log(letter.children[i])

//   en.map((el)=>{document.addEventListener('mousedown', function(event) {    
//     if (el.code==='ShiftLeft' ||el.code==='ShiftRight' ) {initShift(en);}})
//          }
//  );

 
document.addEventListener('keyup', function(event) {  
     if (event.key == 'Shift' ) {init(en) } 
      }
  );
  
document.addEventListener('keydown', function(event) {    
       if (event.key == 'Shift') {initShift(en); }
        }
    );
  
// document.addEventListener('click',()=> {
//     if (en[28].code==='CapsLock' ) {initShift(en); console.log(1) }
//     });
 
// document.addEventListener('keydown', function(event) {
//      textarea.appendChild('event.key')}
// );


// document.addEventListener('click', function(event) {
  
//     for (let i=0;i<en.length;i++){
//       if(en[i].code==='CapsLock'){ initShift(en);
//      }}
//     }
    
// );

// document.addEventListener('click', function(event) {
  
//     for (let i=0;i<en.length;i++){
   
//    textarea.appendChild('en[i].small')}}
// );
document.onkeydown=function(event){
  letter.querySelectorAll('.letter-holder .key').forEach(function(e){
   e.classList.remove('active')
  })
  letter.querySelector('.letter-holder .key[data="'+event.code+'"]').classList.add('active')
 }

letter.querySelectorAll('.letter-holder .key').forEach(function(e){
  e.onclick=function(event){
    letter.querySelectorAll('.letter-holder .key').forEach(function(e){
      e.classList.remove('active');
    });
    let code=this.getAttribute('data');
    this.classList.add('active');
  }
})

for (let key of en) {
   // console.log(key.small)
    key.onclick = function () {
    textarea.append(key.small.textContent);
    console.log(key.small.textContent,57)
    }
    }

//     let code= letter.querySelectorAll('.letter-holder .key').forEach(function(e){
        
//           let code=e.getAttribute('data'); console.log(code)
//       })
//  console.log(code)
