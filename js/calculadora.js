
$(document).ready(function() {
    var vismaAutoivoice = vismaAutoivoice || {};
    vismaAutoivoice.calculator = function() {
      var slider1 = document.getElementById("slider-autoinvoice-invoices"), //1 element to create slider      
        $result = $("#slider-result"); //calculation output element}
        $meses = $("#meses"); 
      // Appending money-formatting (visual)
      var outputFormat = wNumb({
        prefix: "$",
        decimals: 0,
        thousand: ",",
        mark: "",
      });
      //Create slider for invoice count
      noUiSlider.create(slider1, {
        start: 30,
        step: 5,
        tooltips: wNumb({
          decimals: 0,
          thousand: ""
        }),
        range: {
          min: 5,
          max: 60
        },
        
      });
      //Create slider for digital % of invoice count  
      function calculateSavings(invoices) {
        var result = 70000/invoices;
        console.log("total result: ", result, invoices);
        $result.html(outputFormat.to(result)+" MXN")
        $meses.html(invoices)
      }
      //Default result before interaction with sliders
      var invoiceCount = Number(slider1.noUiSlider.get())
      console.log(
        invoiceCount,
        typeof invoiceCount,
      //  invoiceCount + digitalCount
      );
      //calculate saved hours and update calculation output element's content
      var calculateMoney = function() {
          //Show calculation result on screen
          $amountSpan.html(mod);
      };
      /* var digitalInvoices = 80;
      digitalInvoices = digitalInvoices / 100;
      console.log(outputFormat.to(1000 * (1 - digitalInvoices) * savingRate), slider1);
  */
     
  
      //User can input calculation value by slider or directly into input field
      //When the slider value changes, update the input and calculation output element's content
      calculateSavings(invoiceCount);
      
      slider1.noUiSlider.on("update", function(values, handle) {
        invoiceCount = Number(values[handle]);
        calculateSavings(invoiceCount);
       // console.log(" slider 1 ", invoiceCount, typeof invoiceCount);
        return invoiceCount;
      });
    };
    vismaAutoivoice.calculator();
  });
  