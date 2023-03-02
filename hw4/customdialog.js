
function customdialogMain() {
    const outputBox = document.getElementById('cs-output');
    const alertBtn = document.getElementById('custom-alert-button');
    const confirmBtn = document.getElementById('custom-confirm-button');
    const promptBtn = document.getElementById('custom-prompt-button');
    const dialogBox = document.getElementById("custom-alert-dialog");
    let testStr =
        `<dialog id="csDialog">
            <form method="dialog">
                <p>
                    <label>What is your name?</label>
                    <input type="text">
                </p>
                <div>
                    <button value="cancel">Cancel</button>
                    <button id="cs-confirm" value="default">Confirm</button>
                </div>
            </form>
        </dialog>`;

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
    let testStr =
        `
            <form method="dialog">
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

    let dialogBox = document.getElementById("custom-alert-dialog");
    dialogBox.innerHTML = testStr;
    dialogBox.show();
    bindButtons();
    return 0;
}
function confirmDialog(outputBox){
    let testStr =
        `
   <form method="dialog">
                <h2>Do you confirm to the terms and conditions?</h2>
                <div>
                    <button value="cancel">Cancel</button>
                    <button id="cs-confirm" value="default">Confirm</button>
                </div>
            </form>`;

    document.getElementById('cs-dialog').innerHTML = testStr;
    document.getElementById('custom-alert-dialog').show();
    return 0;
}
function promptDialog(outputBox){
    let testStr =
        `<dialog id="custom-prompt-dialog">
            <form method="dialog">
                <p>
                    <label>What is your name?</label>
                    <input type="text">
                </p>
                <div>
                    <button value="cancel">Cancel</button>
                    <button id="cs-confirm" value="default">Confirm</button>
                </div>
            </form>
        </dialog>`;

    return 0;
}

function bindButtons(){
    const confirmBtn = document.getElementById('cs-confirm');
    const cancelBtn = document.getElementById('cs-cancel');

    confirmBtn.addEventListener('click', () => {

    });
    cancelBtn.addEventListener('click', () => {

    });

}
export {customdialogMain, confirmDialog, alertDialog, promptDialog}
