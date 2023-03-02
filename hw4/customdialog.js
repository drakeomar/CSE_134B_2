
function customdialogMain() {
    const outputBox = document.getElementById('cs-output');
    const alertBtn = document.getElementById('custom-alert-button');
    const confirmBtn = document.getElementById('custom-confirm-button');
    const promptBtn = document.getElementById('custom-prompt-button');

    let testStr =
        `<dialog style="display: block" id="csDialog">
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

    /**listners*/
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
        `<dialog id="custom-alert-dialog" style="display: block" id="csAlertDialog">
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
        </dialog>`;

    bindButtons(outputBox);
    return 0;
}
function confirmDialog(outputBox){
    let testStr =
        `<dialog id="custom-confirm-dialog" style="display: block" id="csConfirmDialog">
            <form method="dialog">
                <h2>Do you confirm to the terms and conditions?</h2>
                <div>
                    <button value="cancel">Cancel</button>
                    <button id="cs-confirm" value="default">Confirm</button>
                </div>
            </form>
        </dialog>`;

    document.getElementById('cs-output').innerHTML = testStr;
    document.getElementById('custom-confirm-dialog').show();
    return 0;
}
function promptDialog(outputBox){
    let testStr =
        `<dialog style="display: block" id="csPromptDialog">
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
