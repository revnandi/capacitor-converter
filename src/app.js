class Converter {
  constructor() {
    this.idSelector = "cc_converter",
    this.inputElements = {
      pfInput: document.getElementById('cc_input_pf'),
      nfInput: document.getElementById('cc_input_nf'),
      ufInput: document.getElementById('cc_input_uf'),
      fInput: document.getElementById('cc_input_f')
    }

    this.bindEvents();
  };

  bindEvents() {
    for (const [key, value] of Object.entries(this.inputElements)) {
      value.addEventListener('input', e => {
        this.convertValues(e.target);
      });
    }
  };

  convertValues(triggeredElement) {
    triggeredElement.value = triggeredElement.value;
    for (const [key, value] of Object.entries(this.inputElements)) {
      if(value.dataset.unit != triggeredElement.dataset.unit) {
        let baseValue = triggeredElement.value / triggeredElement.dataset.modifier;
        value.value = baseValue * value.dataset.modifier;
      }
      }
  };
} 

const capCon = new Converter;