class repository {
  static data_list = [
    {
      id: 1,
      type: "text-input",
      content_type: "title",
      value: "RFA - Crown Fit",
      items: [
        {
          id: 1,
          parent_id: 1,
          type: "button",
          content_type: "item",
          key: "Select Location",
          values: []
        },
        {
          id: 2,
          parent_id: 1,
          type: "text-input",
          content_type: "item",
          key: "Tried crown on model",
          values: [
            {
              id: 1,
              parent_id: 2,
              type: "button",
              content_type: "item-values",
              key: "Good fit"
            },
            {
              id: 2,
              parent_id: 2,
              type: "button",
              content_type: "item-values",
              key: "Minor adjustments likely required"
            }
          ]
        },
        {
          id: 3,
          parent_id: 1,
          type: "text-input",
          content_type: "item",
          key: "Risks discussed:",
          values: []
        },
        {
          id: 4,
          parent_id: 1,
          type: "text-input",
          content_type: "item",
          key: "Patient consents to treatment",
          values: [
            {
              id: 1,
              parent_id: 4,
              type: "button",
              content_type: "item-values",
              key: "Verbally"
            },
            {
              id: 2,
              parent_id: 4,
              type: "button",
              content_type: "item-values",
              key: "Written"
            }
          ]
        },
        {
          id: 5,
          parent_id: 1,
          type: "text-input-with-placeHolder",
          content_type: "item",
          key: "Type here",
          values: []
        }
      ]

    },
    {
      id: 2,
      type: "text-input",
      content_type: "title",
      value: "Procedure",
      items: [
        {
          id: 1,
          parent_id: 2,
          type: "text-input",
          content_type: "item",
          key: "Isolated with",
          values: [
            {
              id: 1,
              parent_id: 1,
              type: "button",
              content_type: "item-values",
              key: "Cotton wool rolls"
            },
            {
              id: 2,
              parent_id: 1,
              type: "button",
              content_type: "item-values",
              key: "Rubber dam"
            }
          ]
        },
        {
          id: 2,
          parent_id: 2,
          type: "text-input",
          content_type: "item",
          key: "Removed temp crown",
          values: []
        },
        {
          id: 3,
          parent_id: 2,
          type: "text-input",
          content_type: "item",
          key: "Tooth preparation:",
          values: [
            {
              id: 1,
              parent_id: 3,
              type: "button",
              content_type: "item-values",
              key: "Cleaned surface"
            },
            {
              id: 2,
              parent_id: 3,
              type: "button",
              content_type: "item-values",
              key: "Etched surface and washed off"
            }
          ]
        },
        {
          id: 4,
          parent_id: 2,
          type: "text-input",
          content_type: "item",
          key: "Tried crown in:",
          values: [
            {
              id: 1,
              parent_id: 4,
              type: "text-input",
              content_type: "sub-item",
              key: "Seating:",
              values: [
                {
                  id: 1,
                  parent_id: 1,
                  type: "button",
                  content_type: "item-values",
                  key: "Seats well",
                },
                {
                  id: 2,
                  parent_id: 1,
                  type: "button",
                  content_type: "item-values",
                  key: "Not seating well"
                }
              ]
            },
            {
              id: 2,
              parent_id: 4,
              type: "text-input",
              content_type: "sub-item",
              key: "Margins:",
              values: [
                {
                  id: 1,
                  parent_id: 2,
                  type: "button",
                  content_type: "item-values",
                  key: "Well adapted",
                },
                {
                  id: 2,
                  parent_id: 2,
                  type: "button",
                  content_type: "item-values",
                  key: "poorly adapted"
                }
              ]
            },
            {
              id: 3,
              parent_id: 4,
              type: "text-input",
              content_type: "sub-item",
              key: "Interproximal contacts:",
              values: [
                {
                  id: 1,
                  parent_id: 3,
                  type: "button",
                  content_type: "item-values",
                  key: "Present",
                },
                {
                  id: 2,
                  parent_id: 3,
                  type: "button",
                  content_type: "item-values",
                  key: "Tight"
                },
                {
                  id: 3,
                  parent_id: 3,
                  type: "button",
                  content_type: "item-values",
                  key: "Open"
                }
              ]
            },
            {
              id: 4,
              parent_id: 4,
              type: "text-input",
              content_type: "sub-item",
              key: "Occlusion:",
              values: [
                {
                  id: 1,
                  parent_id: 4,
                  type: "button",
                  content_type: "item-values",
                  key: "No adjustment required",
                },
                {
                  id: 2,
                  parent_id: 4,
                  type: "button",
                  content_type: "item-values",
                  key: "Adjustment required"
                },
              ]
            }
          ]
        },
        {
          id: 4,
          parent_id: 2,
          type: "text-input",
          content_type: "item",
          key: "Patient shown crown:",
          values: [
            {
              id: 1,
              parent_id: 4,
              type: "button",
              content_type: "item-values",
              key: "happy to have cemented",
            },
            {
              id: 2,
              parent_id: 4,
              type: "button",
              content_type: "item-values",
              key: "not satisfied with appearance"
            },
          ]
        },
        {
          id: 5,
          parent_id: 2,
          type: "text-input",
          content_type: "item",
          key: "Cemented with:",
          values: [
            {
              id: 1,
              parent_id: 5,
              type: "button",
              content_type: "item-values",
              key: "Fuji plus",
            },
            {
              id: 2,
              parent_id: 5,
              type: "button",
              content_type: "item-values",
              key: "Rely x"
            }, {
              id: 3,
              parent_id: 5,
              type: "button",
              content_type: "item-values",
              key: "Panavia",
            }
          ]
        },
        {
          id: 6,
          parent_id: 2,
          type: "text-input",
          content_type: "item",
          key: "Excess cement cleared away",
          values: []
        },
        {
          id: 7,
          parent_id: 2,
          type: "text-input",
          content_type: "item",
          key: "Occlusion checked with articulating paper:",
          values: [
            {
              id: 1,
              parent_id: 7,
              type: "button",
              content_type: "item-values",
              key: "Adjustment required",
            },
            {
              id: 2,
              parent_id: 7,
              type: "button",
              content_type: "item-values",
              key: "No adjustment required"
            }
          ]
        },
        {
          id: 8,
          parent_id: 2,
          type: "text-input",
          content_type: "item",
          key: "Patient happy with result",
          values: []
        },
        {
          id: 9,
          parent_id: 2,
          type: "text-input-with-placeHolder",
          content_type: "item",
          key: "Type here",
          values: []
        }
      ]
    }
  ];

}

export default repository
