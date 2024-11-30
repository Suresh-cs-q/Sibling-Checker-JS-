# Sibling-Checker-JS-

  var a = document.querySelectorAll('.hero');
  if (a.length > 0) {
      if (a[0].previousElementSibling == null) {
          console.log("Sibling not present");
      } else {
          console.log(a[0].previousElementSibling);
      }
  } else {
      console.log("No elements with the class 'hero' found.");
  }


  <div> Top 5 Sigma
      <ul>
          <li>Suresh</li>
          <li>Kumar</li>
          <li class="hero">Suresh</li>
          <li>Suresh</li>
          <li>Suresh</li>
          <li>Suresh</li>
      </ul>
  </div>



# Output

Case 1: If the .hero element has a previous sibling, it logs the sibling element in the console.
Case 2: If the .hero element does not have a previous sibling, it logs "Sibling not present".
Case 3: If no .hero elements are found, it logs "No elements with the class 'hero' found.".
