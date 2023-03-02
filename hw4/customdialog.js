function customCleanUp(strings, name){
    const str0 = strings[0];
    const str1 = strings[1];
    const str2 = strings[2];

    let cleanUserInput = DOMPurify.sanitize(`${str0}${name}${str1}${name}${str2}`, { USE_PROFILES: { html: true } });

    return cleanUserInput;
}

const dialogBox = document.getElementById("custom-alert-dialog");
const outputBox = document.getElementById('cs-output');
const alertBtn = document.getElementById('custom-alert-button');
const confirmBtn = document.getElementById('custom-confirm-button');
const promptBtn = document.getElementById('custom-prompt-button');
function customdialogMain() {

        /**listeners*/
        alertBtn.addEventListener('click', () => {
            alertDialog(outputBox);
        });
        confirmBtn.addEventListener('click', () => {
            confirmDialog(outputBox);
        });
        promptBtn.addEventListener('click', () => {
            promptDialog(outputBox);
        });

    //document.getElementById('main-display').setHTML(testStr,new Sanitizer());
}

function alertDialog(outputBox){
    let dialogStr =
        ` <form method="dialog">
                <h2> ALERT! </h2>
                <p>
                   You are getting an URGENT MESSAGE!!
                </p>
                <div>
                    <button id="cs-cancel" value="cancel">Cancel</button>
                    <button id="cs-confirm" value="default">Confirm</button>
                </div>
            </form>
        `;



    //let dialogBox = document.getElementById("custom-alert-dialog");
    dialogBox.innerHTML = dialogStr;

    const confirmBtn = document.getElementById('cs-confirm');
    const cancelBtn = document.getElementById('cs-cancel');

    confirmBtn.addEventListener('click', () => {
        outputBox.innerHTML = "The User was alerted";
    });
    cancelBtn.addEventListener('click', () => {
        outputBox.innerHTML = "The User did not confirm";
    });

    dialogBox.show();
    bindButtons();
    return 0;
}
function confirmDialog(outputBox){
    let dialogStr =
        `<form method="dialog">
                <h2>Do you confirm to the terms and conditions?</h2>
                <div>
                    <button id="cs-cancel" value="cancel">No</button>
                    <button id="cs-confirm" value="default">Confirm</button>
                </div>
            </form>`;

    dialogBox.innerHTML = dialogStr;


    const confirmBtn = document.getElementById('cs-confirm');
    const cancelBtn = document.getElementById('cs-cancel');

    confirmBtn.addEventListener('click', () => {
        outputBox.innerHTML = `<p>User Confirmed YES </p>`;
    });
    cancelBtn.addEventListener('click', () => {
        outputBox.innerHTML = `<p>User Did Not Confirm, User selected CANCEL </p>`;
    });

    dialogBox.show();
}
function promptDialog(){
    let dialogStr =
        `
            <form method="dialog">
                <p>
                    <label>What is your name?</label>
                    <input id="name-input" type="text">
                </p>
                <div>
                    <button id="cs-cancel" value="cancel">Cancel</button>
                    <button id="cs-confirm" value="default">Confirm</button>
                </div>
            </form>`;


    //let dialogBox = document.getElementById("custom-alert-dialog");
    dialogBox.innerHTML = dialogStr;

    const confirmBtn = document.getElementById('cs-confirm');
    const cancelBtn = document.getElementById('cs-cancel');

    confirmBtn.addEventListener('click', () => {
        let personName = document.getElementById("name-input").value;
        outputBox.innerHTML = customCleanUp`<p>Welcome ${personName}!</p>
                               <p>This website aims to provide cool features for users like you, ${personName}</p>`;
    });
    cancelBtn.addEventListener('click', () => {
        outputBox.innerHTML = `<p>User Confirmed NO </p>`;
    });

    dialogBox.show();
}

export {customdialogMain, confirmDialog, alertDialog, promptDialog}
