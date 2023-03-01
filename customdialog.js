
function customdialogMain() {
    let testStr =
        `<dialog style="display: block" id="favDialog">
        <form method="dialog">
        <p>
        <label>Favorite animal:
        <select>
          <option value="default">Choose…</option>
          <option>Brine shrimp</option>
          <option>Red panda</option>
          <option>Spider monkey</option>
        </select>
      </label>
    </p>
    <div>
      <button value="cancel">Cancel</button>
      <button id="confirmBtn" value="default" onclick="">Confirm</button>
    </div>
  </form>
</dialog>`;

    document.getElementById('main-display').setHTML(testStr,new Sanitizer());
}

function alertDialog(){
    return 0; 
}
function confirmDialog(){
    return 0;
}
function promptDialog(){
    return 0;
}

export {customdialogMain, confirmDialog, alertDialog, promptDialog}
