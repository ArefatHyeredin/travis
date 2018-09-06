const validations = {
  exportFormat: [
    {
      rule: 'isLength',
      args: { min: 1 }
    }
  ],
  exportPath: [
    {
      rule: 'isLength',
      args: { min: 1 }
    }
  ],
  itemsUrl: [
    {
      rule: 'isURL'
    }
  ],
  itemsSelector: [
    {
      rule: 'isLength',
      args: { min: 1 }
    }
  ],
  itemsAttributeToScrape: [
    {
      rule: 'isLength',
      args: { min: 1 }
    }
  ]
}

module.exports = validations
