export function customdialog() {
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
      <button id="confirmBtn" value="default">Confirm</button>
    </div>
  </form>
</dialog>`;
    document.getElementById('main-display').innerHTML = testStr;
}