function findAndReplace() {
    var editor = document.getElementById("editor");
    var find = document.getElementById("find").value;
    var replace = document.getElementById("replace").value;
    var html = editor.innerHTML;
    var regex = new RegExp(find, "gi"); // use global and case-insensitive regex to find all occurrences
    html = html.replace(regex, function(match) {
      return "<span class='highlight'>" + match + "</span>"; // highlight all occurrences
    });
    editor.innerHTML = html;
  
    // replace only the first occurrence
    regex = new RegExp(find, "i"); // use case-insensitive regex to find first occurrence
    var match = regex.exec(html); // find the first occurrence of the search term
    if (match) {
      var startIndex = match.index; // get the index of the first occurrence
      if (replace === '') {
        // if replace input is empty, remove all occurrences
        var replacedHtml = html.replace(regex, '');
      } else {
        // replace the first occurrence
        var replacedHtml = html.substring(0, startIndex) + html.substring(startIndex).replace(regex, replace);
      }
      editor.innerHTML = replacedHtml;
    }
  }
  
  function replaceAll() {
    var editor = document.getElementById("editor");
    var find = document.getElementById("find").value;
    var replace = document.getElementById("replace").value;
    var html = editor.innerHTML;
    var regex = new RegExp(find, "gi"); // use global and case-insensitive regex to find all occurrences
    if (replace === '') {
      // if replace input is empty, remove all occurrences
      html = html.replace(regex, '');
    } else {
      // replace all occurrences
      html = html.replace(regex, replace);
    }
    editor.innerHTML = html;
  }
  