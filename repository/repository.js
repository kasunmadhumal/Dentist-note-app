class repository {
  static data_list = [
    {  "id":1,
        "type":"Treatment",
        "name":"Crown Fit",
        "data":
        [
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
                parentTreatment:"Crown Fit",
                values: [],
                otherOptions:[[],[]],
                haveSubItems: false
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
                ],
                otherOptions:[[],[]],
                haveSubItems: false
              },
              {
                id: 3,
                parent_id: 1,
                type: "text-input",
                content_type: "item",
                key: "Risks discussed:",
                values: [],
                otherOptions:[[],[]],
                haveSubItems: false
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
                ],
                otherOptions:[[],[]],
                haveSubItems: false
              },
              {
                id: 5,
                parent_id: 1,
                type: "text-input-with-placeHolder",
                content_type: "item",
                key: "Type here",
                values: [],
                otherOptions:[[],[]],
                haveSubItems: false
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
                ],
                otherOptions:[[],[]],
                haveSubItems: false
              },
              {
                id: 2,
                parent_id: 2,
                type: "text-input",
                content_type: "item",
                key: "Removed temp crown",
                values: [],
                otherOptions:[[],[]],
                haveSubItems: false
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
                ],
                otherOptions:[[],[]],
                haveSubItems: false
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
                    ],
                    otherOptions:[[],[]]
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
                    ],
                    otherOptions:[[],[]]
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
                    ],
                    otherOptions:[[],[]]
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
                    ],
                    otherOptions:[[],[]]
                  }
                ],
                otherOptions:[[],[]],
                haveSubItems: true
              },
              {
                id: 5,
                parent_id: 2,
                type: "text-input",
                content_type: "item",
                key: "Patient shown crown:",
                values: [
                  {
                    id: 1,
                    parent_id: 5,
                    type: "button",
                    content_type: "item-values",
                    key: "happy to have cemented",
                  },
                  {
                    id: 2,
                    parent_id: 5,
                    type: "button",
                    content_type: "item-values",
                    key: "not satisfied with appearance"
                  },
                ],
                otherOptions:[[],[]],
                haveSubItems: false
              },
              {
                id: 6,
                parent_id: 2,
                type: "text-input",
                content_type: "item",
                key: "Cemented with:",
                values: [
                  {
                    id: 1,
                    parent_id: 6,
                    type: "button",
                    content_type: "item-values",
                    key: "Fuji plus",
                  },
                  {
                    id: 2,
                    parent_id: 6,
                    type: "button",
                    content_type: "item-values",
                    key: "Rely x"
                  }, {
                    id: 3,
                    parent_id: 6,
                    type: "button",
                    content_type: "item-values",
                    key: "Panavia",
                  }
                ],
                otherOptions:[[],[]],
                haveSubItems: false
              },
              {
                id: 7,
                parent_id: 2,
                type: "text-input",
                content_type: "item",
                key: "Excess cement cleared away",
                values: [],
                otherOptions:[[],[]],
                haveSubItems: false
              },
              {
                id: 8,
                parent_id: 2,
                type: "text-input",
                content_type: "item",
                key: "Occlusion checked with articulating paper:",
                values: [
                  {
                    id: 1,
                    parent_id: 8,
                    type: "button",
                    content_type: "item-values",
                    key: "Adjustment required",
                  },
                  {
                    id: 2,
                    parent_id: 8,
                    type: "button",
                    content_type: "item-values",
                    key: "No adjustment required"
                  }
                ],
                otherOptions:[[],[]],
                haveSubItems: false
              },
              {
                id: 9,
                parent_id: 2,
                type: "text-input",
                content_type: "item",
                key: "Patient happy with result",
                values: [],
                otherOptions:[[],[]],
                haveSubItems: false
              },
              {
                id: 10,
                parent_id: 2,
                type: "text-input-with-placeHolder",
                content_type: "item",
                key: "Type here",
                values: [],
                otherOptions:[[],[]],
                haveSubItems: false
              }
            ]
          }

        ],
    },
    {  "id":2,
      "type":"Treatment",
      "name":" Whitening Impressions",
      "data":
        [
          {
            id: 1,
            type: "text-input",
            content_type: "title",
            value: "RFA: Whitening Impressions",
            items: [

              {
                id: 1,
                parent_id: 1,
                type: "text-input",
                content_type: "item",
                key: "Dentist:",
                values: [],
                otherOptions:[[],[]],
                haveSubItems: false
              },
              {
                id: 2,
                parent_id: 1,
                type: "text-input",
                content_type: "item",
                key: "Nurse:",
                values: [],
                otherOptions:[[],[]],
                haveSubItems: false
              },
              {
                id: 3,
                parent_id: 1,
                type: "button",
                content_type: "item",
                key: "Select Location",
                parentTreatment:"Whitening Impressions",
                values: [],
                otherOptions:[[],[]],
                haveSubItems: false
              },
              {
                id: 4,
                parent_id: 1,
                type: "text-input",
                content_type: "item",
                key: "Patient attending for whitening impressions",
                values: [],
                otherOptions:[[],[]],
                haveSubItems: false
              },
              {
                id: 5,
                parent_id: 1,
                type: "text-input",
                content_type: "item",
                key: "Risks:",
                values: [],
                otherOptions:[[],[]],
                haveSubItems: false
              },
              {
                id: 6,
                parent_id: 1,
                type: "text-input",
                content_type: "item",
                key: "Other Information:",
                values: [
                  {
                    id: 1,
                    parent_id: 6,
                    type: "text-input",
                    content_type: "sub-item",
                    key: "Trays need to be worn overnight 2-4 weeks",
                    values: [],
                    otherOptions:[[],[]]
                  },
                  {
                    id: 2,
                    parent_id: 6,
                    type: "text-input",
                    content_type: "sub-item",
                    key: "Can result in a patchy appearance across teeth as some areas may lighten more than others, the area near the gum will also not appear the same colour as the tip of the tooth",
                    values: [],
                    otherOptions:[[],[]]
                  },
                  {
                    id: 3,
                    parent_id: 6,
                    type: "text-input",
                    content_type: "sub-item",
                    key: "Canines naturally appear darker",
                    values: [],
                    otherOptions:[[],[]]
                  },
                  {
                    id: 4,
                    parent_id: 6,
                    type: "text-input",
                    content_type: "sub-item",
                    key: "Additional risks:",
                    values: [
                      {
                        id: 1,
                        parent_id: 4,
                        type: "button",
                        content_type: "item-values",
                        key: "None noted",
                      },
                      {
                        id: 2,
                        parent_id: 4,
                        type: "button",
                        content_type: "item-values",
                        key: "Anterior restorations"
                      },
                      {
                        id: 3,
                        parent_id: 4,
                        type: "button",
                        content_type: "item-values",
                        key: "Visible white spots"
                      },
                    ],
                    otherOptions:[[],[]]
                  }
                ],
                otherOptions:[[],[]],
                haveSubItems: true
              },

              {
                id: 7,
                parent_id: 1,
                type: "text-input",
                content_type: "item",
                key: "Crowns/ fillings will not lighten with the bleach and if require replacement will be at extra cost",
                values: [],
                otherOptions:[[],[]],
                haveSubItems: false
              },
              {
                id: 8,
                parent_id: 1,
                type: "text-input",
                content_type: "item",
                key: "White spots may become more prominent as they also may lighten more than the surrounding tooth tissue",
                values: [],
                otherOptions:[[],[]],
                haveSubItems: false
              },

              {
                id: 9,
                parent_id: 1,
                type: "text-input-with-placeHolder",
                content_type: "item",
                key: "Type here",
                values: [],
                otherOptions:[[],[]],
                haveSubItems: false
              }
            ]

          },
          {
            id: 2,
            type: "text-input",
            content_type: "title",
            value: "Medical history",
            items: [
              {
                id: 1,
                parent_id: 2,
                type: "text-input",
                content_type: "item",
                key: "Medication",
                values: [
                  {
                    id: 1,
                    parent_id: 1,
                    type: "button",
                    content_type: "item-values",
                    key: "None"
                  }
                ],
                otherOptions:[[],[]],
                haveSubItems: false
              },
              {
                id: 2,
                parent_id: 2,
                type: "text-input",
                content_type: "item",
                key: "Known allergies",
                values: [
                  {
                    id: 1,
                    parent_id: 2,
                    type: "button",
                    content_type: "item-values",
                    key: "None"
                  },
                  {
                    id: 2,
                    parent_id: 2,
                    type: "button",
                    content_type: "item-values",
                    key: "Penicillin"
                  },
                  {
                    id: 3,
                    parent_id: 2,
                    type: "button",
                    content_type: "item-values",
                    key: "Latex"
                  }
                ],
                otherOptions:[[],[]],
                haveSubItems: false
              },
              {
                id: 3,
                parent_id: 2,
                type: "text-input",
                content_type: "item",
                key: "Relevant medical conditions",
                values: [
                  {
                    id: 1,
                    parent_id: 3,
                    type: "button",
                    content_type: "item-values",
                    key: "Diabetes"
                  },
                  {
                    id: 2,
                    parent_id: 3,
                    type: "button",
                    content_type: "item-values",
                    key: "Asthma"
                  },
                  {
                    id: 3,
                    parent_id: 3,
                    type: "button",
                    content_type: "item-values",
                    key: "Hypertension"
                  },
                  {
                    id: 4,
                    parent_id: 3,
                    type: "button",
                    content_type: "item-values",
                    key: "Generally fit and well"
                  }
                ],
                otherOptions:[[],[]],
                haveSubItems: false
              },
              {
                id: 4,
                parent_id: 2,
                type: "text-input",
                content_type: "item",
                key: "Checked, no changes",
                values: [],
                otherOptions:[[],[]],
                haveSubItems: false
              },
              {
                id: 5,
                parent_id: 2,
                type: "text-input",
                content_type: "item",
                key: "Checked and updated",
                values: [],
                otherOptions:[[],[]],
                haveSubItems: false
              },
              {
                id: 6,
                parent_id: 2,
                type: "text-input-with-placeHolder",
                content_type: "item",
                key: "Type here",
                values: [],
                otherOptions:[[],[]],
                haveSubItems: false
              }
            ]
          },
          {
            id: 3,
            type: "text-input",
            content_type: "title",
            value: "Procedure",
            items: [
              {
                id: 1,
                parent_id: 3,
                type: "text-input",
                content_type: "item",
                key: "Photographs",
                values: [
                  {
                    id: 1,
                    parent_id: 1,
                    type: "button",
                    content_type: "item-values",
                    key: "Not taken today"
                  },
                  {
                    id: 2,
                    parent_id: 1,
                    type: "button",
                    content_type: "item-values",
                    key: "Taken, consent gained"
                  }
                ],
                otherOptions:[[],[]],
                haveSubItems: false
              },
              {
                id: 2,
                parent_id: 3,
                type: "text-input",
                content_type: "item",
                key: "Shade agreed:",
                values: [
                  {
                    id: 1,
                    parent_id: 2,
                    type: "button",
                    content_type: "item-values",
                    key: "A1"
                  },
                  {
                    id: 2,
                    parent_id: 2,
                    type: "button",
                    content_type: "item-values",
                    key: "A2"
                  },
                  {
                    id: 3,
                    parent_id: 2,
                    type: "button",
                    content_type: "item-values",
                    key: "A3"
                  },
                  {
                    id: 2,
                    parent_id: 2,
                    type: "button",
                    content_type: "item-values",
                    key: "A3.5"
                  },
                  {
                    id: 5,
                    parent_id: 2,
                    type: "button",
                    content_type: "item-values",
                    key: "A4"
                  },
                  {
                    id: 6,
                    parent_id: 2,
                    type: "button",
                    content_type: "item-values",
                    key: "B1"
                  },
                  {
                    id: 7,
                    parent_id: 2,
                    type: "button",
                    content_type: "item-values",
                    key: "B2"
                  },
                  {
                    id: 8,
                    parent_id: 2,
                    type: "button",
                    content_type: "item-values",
                    key: "B3"
                  },
                  {
                    id: 9,
                    parent_id: 2,
                    type: "button",
                    content_type: "item-values",
                    key: "B4"
                  },
                  {
                    id: 10,
                    parent_id: 2,
                    type: "button",
                    content_type: "item-values",
                    key: "C1"
                  },
                  {
                    id: 11,
                    parent_id: 2,
                    type: "button",
                    content_type: "item-values",
                    key: "C2"
                  },
                  {
                    id: 12,
                    parent_id: 2,
                    type: "button",
                    content_type: "item-values",
                    key: "C3"
                  },
                  {
                    id: 13,
                    parent_id: 2,
                    type: "button",
                    content_type: "item-values",
                    key: "C4"
                  },
                  {
                    id: 14,
                    parent_id: 2,
                    type: "button",
                    content_type: "item-values",
                    key: "D1"
                  },
                  {
                    id: 15,
                    parent_id: 2,
                    type: "button",
                    content_type: "item-values",
                    key: "D2"
                  },
                  {
                    id: 16,
                    parent_id: 2,
                    type: "button",
                    content_type: "item-values",
                    key: "D3"
                  },
                  {
                    id: 17,
                    parent_id: 2,
                    type: "button",
                    content_type: "item-values",
                    key: "D4"
                  }
                ],
                otherOptions:[[],[]],
                haveSubItems: false
              },
              {
                id: 3,
                parent_id: 3,
                type: "text-input",
                content_type: "item",
                key: "Record taken with",
                values: [
                  {
                    id: 1,
                    parent_id: 3,
                    type: "button",
                    content_type: "item-values",
                    key: "alginate"
                  },
                  {
                    id: 2,
                    parent_id: 3,
                    type: "button",
                    content_type: "item-values",
                    key: "itero scanner"
                  },
                ],
                otherOptions:[[],[]],
                haveSubItems: false
              },
              {
                id: 4,
                parent_id: 3,
                type: "text-input",
                content_type: "item",
                key: "Sent to:",
                values: [],
                otherOptions:[[],[]],
                haveSubItems: false
              },
              {
                id: 5,
                parent_id: 3,
                type: "text-input-with-placeHolder",
                content_type: "item",
                key: "Type here",
                values: [],
                otherOptions:[[],[]],
                haveSubItems: false
              }
            ]
          },
          {
            id: 4,
            type: "text-input",
            content_type: "title",
            value: "Next visit",
            items: [
              {
                id: 1,
                parent_id: 4,
                type: "text-input",
                content_type: "item",
                key: "Whitening fit in",
                values: [
                  {
                    id: 1,
                    parent_id: 1,
                    type: "button",
                    content_type: "item-values",
                    key: "1 week"
                  },
                  {
                    id: 2,
                    parent_id: 1,
                    type: "button",
                    content_type: "item-values",
                    key: "2 weeks"
                  }
                ],
                otherOptions:[[],[]],
                haveSubItems: false
              },
              {
                id: 2,
                parent_id: 4,
                type: "text-input-with-placeHolder",
                content_type: "item",
                key: "Type here",
                values: [],
                otherOptions:[[],[]],
                haveSubItems: false
              }
            ]
          },
        ]

    },
    {  "id":3,
      "type":"Treatment",
      "name":"Veneer preparation",
      "data":
        [
          {
            id: 1,
            type: "text-input",
            content_type: "title",
            value: "Pt attended for: Veneer preparation",
            items: [
              {
                id: 1,
                parent_id: 1,
                type: "button",
                content_type: "item",
                key: "Select Location",
                parentTreatment:"Veneer preparation",
                values: [],
                otherOptions:[[],[]],
                haveSubItems: false
              },
              {
                id: 2,
                parent_id: 1,
                type: "text-input-with-placeHolder",
                content_type: "item",
                key: "Type here",
                values: [],
                otherOptions:[[],[]],
                haveSubItems: false
              }
            ]

          },
          {
            id: 2,
            type: "text-input",
            content_type: "title",
            value: "Consent",
            items: [
              {
                id: 1,
                parent_id: 2,
                type: "text-input",
                content_type: "item",
                key: "Discussed with patient reason for treatment, prognosis, potential need for further treatment.",
                values: [],
                otherOptions:[[],[]],
                haveSubItems: false
              },
              {
                id: 2,
                parent_id: 2,
                type: "text-input",
                content_type: "item",
                key: "Risks:",
                values: [],
                otherOptions:[[],[]],
                haveSubItems: false
              },
              {
                id: 3,
                parent_id: 2,
                type: "text-input",
                content_type: "item",
                key: "Confirmed treatment with the patient today. Consent obtained:",
                values: [
                  {
                    id: 1,
                    parent_id: 3,
                    type: "button",
                    content_type: "item-values",
                    key: "Verbally"
                  },
                  {
                    id: 2,
                    parent_id: 3,
                    type: "button",
                    content_type: "item-values",
                    key: "Written format"
                  },
                ],
                otherOptions:[[],[]],
                haveSubItems: false
              },
              {
                id: 4,
                parent_id: 2,
                type: "text-input",
                content_type: "item",
                key: "Patient happy to proceed with treatment today",
                values: [],
                otherOptions:[[],[]],
                haveSubItems: false
              },
              {
                id: 5,
                parent_id: 2,
                type: "text-input-with-placeHolder",
                content_type: "item",
                key: "Type here",
                values: [],
                otherOptions:[[],[]],
                haveSubItems: false
              }
            ]
          },
          {
            id: 3,
            type: "text-input",
            content_type: "title",
            value: "Procedure",
            items: [
              {
                id: 1,
                parent_id: 3,
                type: "text-input",
                content_type: "item",
                key: "Re-checked occlusion, guidances and reference points",
                values: [],
                otherOptions:[[],[]],
                haveSubItems: false
              },
              {
                id: 2,
                parent_id: 3,
                type: "text-input",
                content_type: "item",
                key: "Shade taken and confirmed:",
                values: [
                  {
                    id: 1,
                    parent_id: 2,
                    type: "button",
                    content_type: "item-values",
                    key: "A1"
                  },
                  {
                    id: 2,
                    parent_id: 2,
                    type: "button",
                    content_type: "item-values",
                    key: "A2"
                  },
                  {
                    id: 3,
                    parent_id: 2,
                    type: "button",
                    content_type: "item-values",
                    key: "A3"
                  },
                  {
                    id: 4,
                    parent_id: 2,
                    type: "button",
                    content_type: "item-values",
                    key: "A3.5"
                  },
                  {
                    id: 5,
                    parent_id: 2,
                    type: "button",
                    content_type: "item-values",
                    key: "A4"
                  },
                  {
                    id: 6,
                    parent_id: 2,
                    type: "button",
                    content_type: "item-values",
                    key: "B1"
                  },
                  {
                    id: 7,
                    parent_id: 2,
                    type: "button",
                    content_type: "item-values",
                    key: "B2"
                  },
                  {
                    id: 8,
                    parent_id: 2,
                    type: "button",
                    content_type: "item-values",
                    key: "B3"
                  },
                  {
                    id: 9,
                    parent_id: 2,
                    type: "button",
                    content_type: "item-values",
                    key: "B4"
                  },
                  {
                    id: 10,
                    parent_id: 2,
                    type: "button",
                    content_type: "item-values",
                    key: "C1"
                  },
                  {
                    id: 11,
                    parent_id: 2,
                    type: "button",
                    content_type: "item-values",
                    key: "C2"
                  },
                  {
                    id: 12,
                    parent_id: 2,
                    type: "button",
                    content_type: "item-values",
                    key: "C3"
                  },
                  {
                    id: 13,
                    parent_id: 2,
                    type: "button",
                    content_type: "item-values",
                    key: "C4"
                  },
                  {
                    id: 14,
                    parent_id: 2,
                    type: "button",
                    content_type: "item-values",
                    key: "D1"
                  },
                  {
                    id: 15,
                    parent_id: 2,
                    type: "button",
                    content_type: "item-values",
                    key: "D2"
                  },
                  {
                    id: 16,
                    parent_id: 2,
                    type: "button",
                    content_type: "item-values",
                    key: "D3"
                  },
                  {
                    id: 17,
                    parent_id: 2,
                    type: "button",
                    content_type: "item-values",
                    key: "D4"
                  }
                ],
                otherOptions:[[],[]],
                haveSubItems: false
              },
              {
                id: 3,
                parent_id: 3,
                type: "text-input",
                content_type: "item",
                key: "Photograph:",
                values: [
                  {
                    id: 1,
                    parent_id: 3,
                    type: "button",
                    content_type: "item-values",
                    key: "Already taken"
                  },
                  {
                    id: 2,
                    parent_id: 3,
                    type: "button",
                    content_type: "item-values",
                    key: "Taken today - consent obtained"
                  },
                ],
                otherOptions:[[],[]],
                haveSubItems: false
              },
              {
                id: 4,
                parent_id: 3,
                type: "text-input",
                content_type: "item",
                key: "Local anaesthetic:",
                values: [
                  {
                    id: 1,
                    parent_id: 4,
                    type: "button",
                    content_type: "item-values",
                    key: "Nil"
                  },
                  {
                    id: 2,
                    parent_id: 4,
                    type: "button",
                    content_type: "item-values",
                    key: "Topical anaesthetic applied"
                  },
                  {
                    id: 3,
                    parent_id: 4,
                    type: "button",
                    content_type: "item-values",
                    key: "Lidocaine 2% adrenaline 1:80000"
                  },
                  {
                    id: 4,
                    parent_id: 4,
                    type: "button",
                    content_type: "item-values",
                    key: "Articaine 4% adrenaline 1:100000"
                  },
                  {
                    id: 5,
                    parent_id: 4,
                    type: "text-input",
                    content_type: "sub-item",
                    key: "Batch Number:",
                    values: [],
                    otherOptions:[[],[]]
                  },
                  {
                    id: 6,
                    parent_id: 4,
                    type: "text-input",
                    content_type: "sub-item",
                    key: "Expiry Date:",
                    values: [],
                    otherOptions:[[],[]]
                  },
                  {
                    id: 7,
                    parent_id: 4,
                    type: "text-input",
                    content_type: "sub-item",
                    key: "Method:",
                    values: [
                      {
                        id: 1,
                        parent_id: 7,
                        type: "button",
                        content_type: "item-values",
                        key: "ID block",
                      },
                      {
                        id: 2,
                        parent_id: 7,
                        type: "button",
                        content_type: "item-values",
                        key: "Buccal infiltration"
                      },
                      {
                        id: 3,
                        parent_id: 7,
                        type: "button",
                        content_type: "item-values",
                        key: "Palatal infiltration"
                      },
                      {
                        id: 4,
                        parent_id: 7,
                        type: "button",
                        content_type: "item-values",
                        key: "Lingual infiltration"
                      }
                    ],
                    otherOptions:[[],[]]
                  },
                  {
                    id: 8,
                    parent_id: 4,
                    type: "text-input",
                    content_type: "sub-item",
                    key: "Dose:",
                    values: [
                      {
                        id: 1,
                        parent_id: 8,
                        type: "button",
                        content_type: "item-values",
                        key: "1ml",
                      },
                      {
                        id: 2,
                        parent_id: 8,
                        type: "button",
                        content_type: "item-values",
                        key: "1.5ml"
                      },
                      {
                        id: 3,
                        parent_id: 8,
                        type: "button",
                        content_type: "item-values",
                        key: "2.2ml"
                      },
                    ],
                    otherOptions:[[],[]]
                  }
                ],
                otherOptions:[[],[]],
                haveSubItems: false
              },
              {
                id: 5,
                parent_id: 3,
                type: "text-input",
                content_type: "item",
                key: "Sectional silicone impression taken",
                values: [
                  {
                    id: 1,
                    parent_id: 5,
                    type: "button",
                    content_type: "item-values",
                    key: "from diagnostic wax up"
                  },
                ],
                otherOptions:[[],[]],
                haveSubItems: false
              },
              {
                id: 6,
                parent_id: 3,
                type: "text-input",
                content_type: "item",
                key: "Opposing arch record taken with",
                values: [
                  {
                    id: 1,
                    parent_id: 6,
                    type: "button",
                    content_type: "item-values",
                    key: "Alginate impression"
                  },
                  {
                    id: 2,
                    parent_id: 6,
                    type: "button",
                    content_type: "item-values",
                    key: "Silicone impression"
                  },
                  {
                    id: 3,
                    parent_id: 6,
                    type: "button",
                    content_type: "item-values",
                    key: "Itero scanner"
                  },
                ],
                otherOptions:[[],[]],
                haveSubItems: false
              },
              {
                id: 7,
                parent_id: 3,
                type: "text-input",
                content_type: "item",
                key: "Isolated with",
                values: [
                  {
                    id: 1,
                    parent_id: 7,
                    type: "button",
                    content_type: "item-values",
                    key: "Cotton wool rolls"
                  },
                  {
                    id: 2,
                    parent_id: 7,
                    type: "button",
                    content_type: "item-values",
                    key: "Rubber dam"
                  },
                ],
                otherOptions:[[],[]],
                haveSubItems: false
              },
              {
                id: 8,
                parent_id: 3,
                type: "text-input",
                content_type: "item",
                key: "Tooth preparation - Reduced labially in 3 planes",
                values: [
                  {
                    id: 1,
                    parent_id: 8,
                    type: "text-input",
                    content_type: "sub-item",
                    key: "Cervical third:",
                    values: [
                      {
                        id: 1,
                        parent_id: 1,
                        type: "button",
                        content_type: "item-values",
                        key: "0.3mm",
                      },
                      {
                        id: 2,
                        parent_id: 1,
                        type: "button",
                        content_type: "item-values",
                        key: "0.4mm"
                      },
                      {
                        id: 3,
                        parent_id: 1,
                        type: "button",
                        content_type: "item-values",
                        key: "0.5mm"
                      }
                    ],
                    otherOptions:[[],[]]
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
                    ],
                    otherOptions:[[],[]]
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
                    ],
                    otherOptions:[[],[]]
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
                    ],
                    otherOptions:[[],[]]
                  }
                ],
                otherOptions:[[],[]],
                haveSubItems: true
              },
              {
                id: 9,
                parent_id: 3,
                type: "text-input",
                content_type: "item",
                key: "Tooth preparation - Chamfer Margin",
                values: [],
                otherOptions:[[],[]],
                haveSubItems: false
              },
              {
                id: 10,
                parent_id: 3,
                type: "text-input",
                content_type: "item",
                key: "Tooth preparation - Reduced incisally by",
                values: [
                  {
                    id: 1,
                    parent_id: 10,
                    type: "button",
                    content_type: "item-values",
                    key: "1mm"
                  },
                  {
                    id: 2,
                    parent_id: 10,
                    type: "button",
                    content_type: "item-values",
                    key: "1.1mm"
                  },
                  {
                    id: 3,
                    parent_id: 10,
                    type: "button",
                    content_type: "item-values",
                    key: "1.2mm"
                  },
                  {
                    id: 4,
                    parent_id: 10,
                    type: "button",
                    content_type: "item-values",
                    key: "1.3mm"
                  },
                  {
                    id: 5,
                    parent_id: 10,
                    type: "button",
                    content_type: "item-values",
                    key: "1.4mm"
                  },
                  {
                    id: 6,
                    parent_id: 10,
                    type: "button",
                    content_type: "item-values",
                    key: "1.5"
                  },
                ],
                otherOptions:[[],[]],
                haveSubItems: false
              },
              {
                id: 11,
                parent_id: 3,
                type: "text-input",
                content_type: "item",
                key: "Prep assessed from incisal, lateral and vertical view using silicone index",
                values: [],
                otherOptions:[[],[]],
                haveSubItems: false
              },
              {
                id: 12,
                parent_id: 3,
                type: "text-input",
                content_type: "item",
                key: "Smoothed and polished using",
                values: [
                  {
                    id: 1,
                    parent_id: 12,
                    type: "button",
                    content_type: "item-values",
                    key: "prophy"
                  },
                  {
                    id: 2,
                    parent_id: 12,
                    type: "button",
                    content_type: "item-values",
                    key: "pumice"
                  },
                  {
                    id: 3,
                    parent_id: 12,
                    type: "button",
                    content_type: "item-values",
                    key: "soflex disk"
                  },
                ],
                otherOptions:[[],[]],
                haveSubItems: false
              },
              {
                id: 13,
                parent_id: 3,
                type: "text-input",
                content_type: "item",
                key: "Bite record taken with",
                values: [
                  {
                    id: 1,
                    parent_id: 13,
                    type: "button",
                    content_type: "item-values",
                    key: "bite registration paste"
                  },
                  {
                    id: 2,
                    parent_id: 13,
                    type: "button",
                    content_type: "item-values",
                    key: "itero scanner"
                  },

                ],
                otherOptions:[[],[]],
                haveSubItems: false
              },
              {
                id: 14,
                parent_id: 3,
                type: "text-input",
                content_type: "item",
                key: "Preparation record taken with",
                values: [
                  {
                    id: 1,
                    parent_id: 14,
                    type: "button",
                    content_type: "item-values",
                    key: "silicone putty wash"
                  },
                  {
                    id: 2,
                    parent_id: 14,
                    type: "button",
                    content_type: "item-values",
                    key: "itero scanner"
                  },

                ],
                otherOptions:[[],[]],
                haveSubItems: false
              },
              {
                id: 15,
                parent_id: 3,
                type: "text-input",
                content_type: "item",
                key: "Temporised",
                values: [
                  {
                    id: 1,
                    parent_id: 15,
                    type: "text-input",
                    content_type: "sub-item",
                    key: "with:",
                    values: [
                      {
                        id: 1,
                        parent_id: 1,
                        type: "button",
                        content_type: "item-values",
                        key: "Integra",
                      },
                      {
                        id: 2,
                        parent_id: 1,
                        type: "button",
                        content_type: "item-values",
                        key: "BisGMA"
                      },
                      {
                        id: 3,
                        parent_id: 1,
                        type: "button",
                        content_type: "item-values",
                        key: "Protemp"
                      },
                      {
                        id: 4,
                        parent_id: 1,
                        type: "button",
                        content_type: "item-values",
                        key: "Integrity"
                      }
                    ],
                    otherOptions:[[],[]]
                  },
                  {
                    id: 2,
                    parent_id: 15,
                    type: "text-input",
                    content_type: "sub-item",
                    key: "cemented with:",
                    values: [
                      {
                        id: 1,
                        parent_id: 2,
                        type: "button",
                        content_type: "item-values",
                        key: "tempbond",
                      },
                      {
                        id: 2,
                        parent_id: 2,
                        type: "button",
                        content_type: "item-values",
                        key: "clip"
                      }
                    ],
                    otherOptions:[[],[]]
                  },
                ],
                otherOptions:[[],[]],
                haveSubItems: true
              },
              {
                id: 16,
                parent_id: 3,
                type: "text-input",
                content_type: "item",
                key: "Lab prescription:",
                values: [
                  {
                    id: 1,
                    parent_id: 16,
                    type: "text-input",
                    content_type: "sub-item",
                    key: "Lab:",
                    values: [],
                    otherOptions:[[],[]]
                  },
                  {
                    id: 2,
                    parent_id: 16,
                    type: "text-input",
                    content_type: "sub-item",
                    key: "Material:",
                    values: [
                      {
                        id: 1,
                        parent_id: 2,
                        type: "button",
                        content_type: "item-values",
                        key: "Monolithic zirconia",
                      },
                      {
                        id: 2,
                        parent_id: 2,
                        type: "button",
                        content_type: "item-values",
                        key: "Emax"
                      },
                      {
                        id: 3,
                        parent_id: 2,
                        type: "button",
                        content_type: "item-values",
                        key: "Porcelain",
                      },
                      {
                        id: 4,
                        parent_id: 2,
                        type: "button",
                        content_type: "item-values",
                        key: "Composite"
                      },
                    ],
                    otherOptions:[[],[]]
                  },
                ],
                otherOptions:[[],[]],
                haveSubItems: true
              },
              {
                id: 17,
                parent_id: 3,
                type: "text-input-with-placeHolder",
                content_type: "item",
                key: "Type here",
                values: [],
                otherOptions:[[],[]],
                haveSubItems: false
              }
            ]
          },
          {
            id: 4,
            type: "text-input",
            content_type: "title",
            value: "Post operative discussion",
            items: [
              {
                id: 1,
                parent_id: 4,
                type: "text-input",
                content_type: "item",
                key: "Temporary veneer may come away.  If this happens, contact the practice for an appointment to have it replaced.",
                values: [],
                otherOptions:[[],[]],
                haveSubItems: false
              },
              {
                id: 2,
                parent_id: 4,
                type: "text-input",
                content_type: "item",
                key: "Following preparation the tooth may feel sensitive. If you experience severe pain then contact the practice as the nerve of the tooth may be affected. In this case the tooth may require root canal treatment.",
                values: [],
                otherOptions:[[],[]],
                haveSubItems: false
              },
              {
                id: 3,
                parent_id: 4,
                type: "text-input",
                content_type: "item",
                key: "NV: Veneer Fit",
                values: [
                  {
                    id: 1,
                    parent_id: 3,
                    type: "button",
                    content_type: "item-values",
                    key: "in 2 weeks"
                  },
                  {
                    id: 2,
                    parent_id: 3,
                    type: "button",
                    content_type: "item-values",
                    key: "in 3 weeks"
                  }
                ],
                otherOptions:[[],[]],
                haveSubItems: false
              },
              {
                id: 4,
                parent_id: 4,
                type: "text-input-with-placeHolder",
                content_type: "item",
                key: "Type here",
                values: [],
                otherOptions:[[],[]],
                haveSubItems: false
              }
            ]
          },
        ]

    },
    {  "id":4,
      "type":"Treatment",
      "name":"Invisalign Fit",
      "data":
        [
          {
            id: 1,
            type: "text-input",
            content_type: "title",
            value: "Invisalign Fit",
            items: [
              {
                id: 1,
                parent_id: 1,
                type: "text-input",
                content_type: "item",
                key: "Dentist:",
                values: [],
                otherOptions:[[],[]],
                haveSubItems: false
              },
              {
                id: 2,
                parent_id: 1,
                type: "text-input",
                content_type: "item",
                key: "Nurse:",
                values: [],
                otherOptions:[[],[]],
                haveSubItems: false
              },
              {
                id: 3,
                parent_id: 1,
                type: "button",
                content_type: "item",
                key: "Select Location",
                parentTreatment:"Veneer preparation",
                values: [],
                otherOptions:[[],[]],
                haveSubItems: false
              },
              {
                id: 4,
                parent_id: 1,
                type: "text-input",
                content_type: "item",
                key: "Patient is happy with clin-check",
                values: [],
                otherOptions:[[],[]],
                haveSubItems: false
              },
              {
                id: 5,
                parent_id: 1,
                type: "text-input",
                content_type: "item",
                key: "Patient has been consented about Invisalign treatment and other alternatives",
                values: [],
                otherOptions:[[],[]],
                haveSubItems: false
              },
              {
                id: 6,
                parent_id: 1,
                type: "text-input",
                content_type: "item",
                key: "Risks:",
                values: [],
                otherOptions:[[],[]],
                haveSubItems: false
              },
              {
                id: 7,
                parent_id: 1,
                type: "text-input-with-placeHolder",
                content_type: "item",
                key: "Type here",
                values: [],
                otherOptions:[[],[]],
                haveSubItems: false
              }
            ]

          },
          {
            id: 2,
            type: "text-input",
            content_type: "title",
            value: "Medical history",
            items: [
              {
                id: 1,
                parent_id: 2,
                type: "text-input",
                content_type: "item",
                key: "Medication",
                values: [
                  {
                    id: 1,
                    parent_id: 1,
                    type: "text-input",
                    content_type: "item-values",
                    key: "None",
                    values: [],
                    otherOptions:[[],[]]
                  },

                ],
                otherOptions:[[],[]],
                haveSubItems: false
              },
              {
                id: 2,
                parent_id: 2,
                type: "text-input",
                content_type: "item",
                key: "Known allergies",
                values: [
                  {
                    id: 1,
                    parent_id: 2,
                    type: "button",
                    content_type: "item-values",
                    key: "None"
                  },
                  {
                    id: 2,
                    parent_id: 2,
                    type: "button",
                    content_type: "item-values",
                    key: "Penicillin"
                  },
                  {
                    id: 3,
                    parent_id: 2,
                    type: "button",
                    content_type: "item-values",
                    key: "Latex"
                  },

                ],
                otherOptions:[[],[]],
                haveSubItems: false
              },
              {
                id: 3,
                parent_id: 2,
                type: "text-input",
                content_type: "item",
                key: "Relevant medical conditions",
                values: [
                  {
                    id: 1,
                    parent_id: 3,
                    type: "button",
                    content_type: "item-values",
                    key: "Diabetes"
                  },
                  {
                    id: 2,
                    parent_id: 3,
                    type: "button",
                    content_type: "item-values",
                    key: "Asthma"
                  },
                  {
                    id: 3,
                    parent_id: 3,
                    type: "button",
                    content_type: "item-values",
                    key: "Hypertension"
                  },
                  {
                    id: 4,
                    parent_id: 3,
                    type: "button",
                    content_type: "item-values",
                    key: "Generally fit and well"
                  },
                ],
                otherOptions:[[],[]],
                haveSubItems: false
              },
              {
                id: 4,
                parent_id: 2,
                type: "text-input-with-placeHolder",
                content_type: "item",
                key: "Type here",
                values: [],
                otherOptions:[[],[]],
                haveSubItems: false
              }
            ]
          },
          {
            id: 3,
            type: "text-input",
            content_type: "title",
            value: "Prep",
            items: [
              {
                id: 1,
                parent_id: 3,
                type: "text-input",
                content_type: "item",
                key: "IPR",
                values: [
                  {
                    id: 1,
                    parent_id: 1,
                    type: "button",
                    content_type: "item-values",
                    key: "NAD"
                  },
                  {
                    id: 2,
                    parent_id: 1,
                    type: "button",
                    content_type: "item-values",
                    key: "IPR"
                  },
                ],
                otherOptions:[[],[]],
                haveSubItems: false
              },
              {
                id: 2,
                parent_id: 3,
                type: "text-input",
                content_type: "item",
                key: "Attachments",
                values: [
                  {
                    id: 1,
                    parent_id: 2,
                    type: "button",
                    content_type: "item-values",
                    key: "NAD"
                  },
                  {
                    id: 2,
                    parent_id: 2,
                    type: "button",
                    content_type: "item-values",
                    key: "Loss Of Attachments"
                  },
                  {
                    id: 3,
                    parent_id: 2,
                    type: "button",
                    content_type: "item-values",
                    key: "Attachment Added"
                  },
                  {
                    id: 4,
                    parent_id: 2,
                    type: "button",
                    content_type: "item-values",
                    key: "Attachment Removed"
                  },
                ],
                otherOptions:[[],[]],
                haveSubItems: false
              },
              {
                id: 3,
                parent_id: 3,
                type: "text-input-with-placeHolder",
                content_type: "item",
                key: "Type here",
                values: [],
                otherOptions:[[],[]],
                haveSubItems: false
              }
            ]
          },
          {
            id: 4,
            type: "text-input",
            content_type: "title",
            value: "Aligners",
            items: [
              {
                id: 1,
                parent_id: 4,
                type: "text-input",
                content_type: "item",
                key: "Aligners fitted - fitting well no issues pt can take in and out",
                values: [],
                otherOptions:[[],[]],
                haveSubItems: false
              },
              {
                id: 2,
                parent_id: 4,
                type: "text-input",
                content_type: "item",
                key: "First aligner issued:",
                values: [
                  {
                    id: 1,
                    parent_id: 2,
                    type: "button",
                    content_type: "item-values",
                    key: "1"
                  },
                  {
                    id: 2,
                    parent_id: 2,
                    type: "button",
                    content_type: "item-values",
                    key: "2"
                  },
                  {
                    id: 3,
                    parent_id: 2,
                    type: "button",
                    content_type: "item-values",
                    key: "3"
                  },
                  {
                    id: 4,
                    parent_id: 2,
                    type: "button",
                    content_type: "item-values",
                    key: "4"
                  },
                  {
                    id: 5,
                    parent_id: 2,
                    type: "button",
                    content_type: "item-values",
                    key: "5"
                  },
                  {
                    id: 6,
                    parent_id: 2,
                    type: "button",
                    content_type: "item-values",
                    key: "6"
                  },
                  {
                    id: 7,
                    parent_id: 2,
                    type: "button",
                    content_type: "item-values",
                    key: "7"
                  },
                  {
                    id: 8,
                    parent_id: 2,
                    type: "button",
                    content_type: "item-values",
                    key: "8"
                  },
                  {
                    id: 9,
                    parent_id: 2,
                    type: "button",
                    content_type: "item-values",
                    key: "9"
                  },
                  {
                    id: 10,
                    parent_id: 2,
                    type: "button",
                    content_type: "item-values",
                    key: "10"
                  },
                  {
                    id: 11,
                    parent_id: 2,
                    type: "button",
                    content_type: "item-values",
                    key: "11"
                  },
                  {
                    id: 12,
                    parent_id: 2,
                    type: "button",
                    content_type: "item-values",
                    key: "12"
                  },
                  {
                    id: 13,
                    parent_id: 2,
                    type: "button",
                    content_type: "item-values",
                    key: "13"
                  },
                  {
                    id: 14,
                    parent_id: 2,
                    type: "button",
                    content_type: "item-values",
                    key: "14"
                  },
                  {
                    id: 15,
                    parent_id: 2,
                    type: "button",
                    content_type: "item-values",
                    key: "15"
                  },
                  {
                    id: 16,
                    parent_id: 2,
                    type: "button",
                    content_type: "item-values",
                    key: "16"
                  },
                  {
                    id: 17,
                    parent_id: 2,
                    type: "button",
                    content_type: "item-values",
                    key: "17"
                  },
                  {
                    id: 18,
                    parent_id: 2,
                    type: "button",
                    content_type: "item-values",
                    key: "18"
                  },
                  {
                    id: 19,
                    parent_id: 2,
                    type: "button",
                    content_type: "item-values",
                    key: "19"
                  },
                  {
                    id: 20,
                    parent_id: 2,
                    type: "button",
                    content_type: "item-values",
                    key: "20"
                  },
                ],
                otherOptions:[[],[]],
                haveSubItems: false
              },
              {
                id: 3,
                parent_id: 4,
                type: "text-input",
                content_type: "item",
                key: "Final aligner issued:",
                values: [
                  {
                    id: 1,
                    parent_id: 3,
                    type: "button",
                    content_type: "item-values",
                    key: "1"
                  },
                  {
                    id: 2,
                    parent_id: 3,
                    type: "button",
                    content_type: "item-values",
                    key: "2"
                  },
                  {
                    id: 3,
                    parent_id: 3,
                    type: "button",
                    content_type: "item-values",
                    key: "3"
                  },
                  {
                    id: 4,
                    parent_id: 3,
                    type: "button",
                    content_type: "item-values",
                    key: "4"
                  },
                  {
                    id: 5,
                    parent_id: 3,
                    type: "button",
                    content_type: "item-values",
                    key: "5"
                  },
                  {
                    id: 6,
                    parent_id: 3,
                    type: "button",
                    content_type: "item-values",
                    key: "6"
                  },
                  {
                    id: 7,
                    parent_id: 3,
                    type: "button",
                    content_type: "item-values",
                    key: "7"
                  },
                  {
                    id: 8,
                    parent_id: 3,
                    type: "button",
                    content_type: "item-values",
                    key: "8"
                  },
                  {
                    id: 9,
                    parent_id: 3,
                    type: "button",
                    content_type: "item-values",
                    key: "9"
                  },
                  {
                    id: 10,
                    parent_id: 3,
                    type: "button",
                    content_type: "item-values",
                    key: "10"
                  },
                  {
                    id: 11,
                    parent_id: 3,
                    type: "button",
                    content_type: "item-values",
                    key: "11"
                  },
                  {
                    id: 12,
                    parent_id: 3,
                    type: "button",
                    content_type: "item-values",
                    key: "12"
                  },
                  {
                    id: 13,
                    parent_id: 3,
                    type: "button",
                    content_type: "item-values",
                    key: "13"
                  },
                  {
                    id: 14,
                    parent_id: 3,
                    type: "button",
                    content_type: "item-values",
                    key: "14"
                  },
                  {
                    id: 15,
                    parent_id: 3,
                    type: "button",
                    content_type: "item-values",
                    key: "15"
                  },
                  {
                    id: 16,
                    parent_id: 3,
                    type: "button",
                    content_type: "item-values",
                    key: "16"
                  },
                  {
                    id: 17,
                    parent_id: 3,
                    type: "button",
                    content_type: "item-values",
                    key: "17"
                  },
                  {
                    id: 18,
                    parent_id: 3,
                    type: "button",
                    content_type: "item-values",
                    key: "18"
                  },
                  {
                    id: 19,
                    parent_id: 3,
                    type: "button",
                    content_type: "item-values",
                    key: "19"
                  },
                  {
                    id: 20,
                    parent_id: 3,
                    type: "button",
                    content_type: "item-values",
                    key: "20"
                  },
                ],
                otherOptions:[[],[]],
                haveSubItems: false
              },
              {
                id: 4,
                parent_id: 4,
                type: "text-input-with-placeHolder",
                content_type: "item",
                key: "Type here",
                values: [],
                otherOptions:[[],[]],
                haveSubItems: false
              }
            ]
          },
          {
            id: 5,
            type: "text-input",
            content_type: "title",
            value: "Instructions",
            items: [
              {
                id: 1,
                parent_id: 5,
                type: "text-input",
                content_type: "item",
                key: "Full time wear (22hrs/day) apart from cleaning and eating",
                values: [],
                otherOptions:[[],[]],
                haveSubItems: false
              },
              {
                id: 2,
                parent_id: 5,
                type: "text-input",
                content_type: "item",
                key: "Chewies to help seating",
                values: [],
                otherOptions:[[],[]],
                haveSubItems: false
              },
              {
                id: 3,
                parent_id: 5,
                type: "text-input",
                content_type: "item",
                key: "Keep aligners in the box at all times when not wearing",
                values: [],
                otherOptions:[[],[]],
                haveSubItems: false
              },
              {
                id: 4,
                parent_id: 5,
                type: "text-input",
                content_type: "item",
                key: "No eating or dinking with the aligners in except for water",
                values: [],
                otherOptions:[[],[]],
                haveSubItems: false
              },
              {
                id: 5,
                parent_id: 5,
                type: "text-input",
                content_type: "item",
                key: "Practice speaking to get used to the sensation",
                values: [],
                otherOptions:[[],[]],
                haveSubItems: false
              },
              {
                id: 6,
                parent_id: 5,
                type: "text-input",
                content_type: "item",
                key: "Change aligner every",
                values: [
                  {
                    id: 1,
                    parent_id: 6,
                    type: "button",
                    content_type: "item-values",
                    key: "week"
                  },
                  {
                    id: 2,
                    parent_id: 6,
                    type: "button",
                    content_type: "item-values",
                    key: "2 weeks"
                  },
                  {
                    id: 3,
                    parent_id: 6,
                    type: "button",
                    content_type: "item-values",
                    key: "3 weeks"
                  },

                ],
                otherOptions:[[],[]],
                haveSubItems: false
              },
              {
                id: 7,
                parent_id: 5,
                type: "text-input",
                content_type: "item",
                key: "Keep old aligners safe in case of loss of current one",
                values: [],
                otherOptions:[[],[]],
                haveSubItems: false
              },
              {
                id: 8,
                parent_id: 5,
                type: "text-input-with-placeHolder",
                content_type: "item",
                key: "Type here",
                values: [],
                otherOptions:[[],[]],
                haveSubItems: false
              }
            ]
          },
          {
            id: 6,
            type: "text-input",
            content_type: "title",
            value: "Next appointment",
            items: [
              {
                id: 1,
                parent_id: 6,
                type: "text-input",
                content_type: "item",
                key: "Weeks till next appointment",
                values: [
                  {
                    id: 1,
                    parent_id: 1,
                    type: "button",
                    content_type: "item-values",
                    key: "1"
                  },
                  {
                    id: 2,
                    parent_id: 1,
                    type: "button",
                    content_type: "item-values",
                    key: "2"
                  },
                  {
                    id: 3,
                    parent_id: 1,
                    type: "button",
                    content_type: "item-values",
                    key: "3"
                  },
                  {
                    id: 4,
                    parent_id: 1,
                    type: "button",
                    content_type: "item-values",
                    key: "4"
                  },
                  {
                    id: 5,
                    parent_id: 1,
                    type: "button",
                    content_type: "item-values",
                    key: "5"
                  },
                  {
                    id: 6,
                    parent_id: 1,
                    type: "button",
                    content_type: "item-values",
                    key: "6"
                  },
                  {
                    id: 7,
                    parent_id: 1,
                    type: "button",
                    content_type: "item-values",
                    key: "7"
                  },
                  {
                    id: 8,
                    parent_id: 1,
                    type: "button",
                    content_type: "item-values",
                    key: "8"
                  },
                  {
                    id: 9,
                    parent_id: 1,
                    type: "button",
                    content_type: "item-values",
                    key: "9"
                  },
                  {
                    id: 10,
                    parent_id: 1,
                    type: "button",
                    content_type: "item-values",
                    key: "10"
                  },

                ],
                otherOptions:[[],[]],
                haveSubItems: false
              },
              {
                id: 2,
                parent_id: 6,
                type: "text-input",
                content_type: "item",
                key: "For",
                values: [
                  {
                    id: 1,
                    parent_id: 2,
                    type: "button",
                    content_type: "item-values",
                    key: "IPR"
                  },
                  {
                    id: 2,
                    parent_id: 2,
                    type: "button",
                    content_type: "item-values",
                    key: "Bonding of Attachments"
                  },
                  {
                    id: 3,
                    parent_id: 2,
                    type: "button",
                    content_type: "item-values",
                    key: "Fit new aligners"
                  },
                  {
                    id: 4,
                    parent_id: 2,
                    type: "button",
                    content_type: "item-values",
                    key: "Review"
                  },
                  {
                    id: 5,
                    parent_id: 2,
                    type: "button",
                    content_type: "item-values",
                    key: "De-bond"
                  },
                ],
                otherOptions:[[],[]],
                haveSubItems: false
              },
              {
                id: 3,
                parent_id: 6,
                type: "text-input-with-placeHolder",
                content_type: "item",
                key: "Type here",
                values: [],
                otherOptions:[[],[]],
                haveSubItems: false
              }
            ]
          },
        ]

    }

  ]

}

export default repository
