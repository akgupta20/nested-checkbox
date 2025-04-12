import { INestedCheckboxData } from "../interface/common";

export const NESTED_CHECKBOX_DATA: Array<INestedCheckboxData> = [
  {
    title: "Technology",
    id: "technology",
    children: [
      {
        title: "Computers",
        id: "computers",
        children: [
          {
            title: "Laptops",
            id: "laptops",
            children: [
              {
                title: "Gaming Laptops",
                id: "gaming_laptops",
                children: [
                  { title: "Alienware", id: "alienware", children: [] },
                  { title: "MSI", id: "msi", children: [] },
                ],
              },
              {
                title: "Ultrabooks",
                id: "ultrabooks",
                children: [
                  { title: "MacBook Air", id: "macbook_air", children: [] },
                  { title: "Dell XPS", id: "dell_xps", children: [] },
                ],
              },
            ],
          },
          {
            title: "Desktops",
            id: "desktops",
            children: [
              {
                title: "All-in-One",
                id: "all_in_one",
                children: [
                  { title: "iMac", id: "imac", children: [] },
                  { title: "HP Envy", id: "hp_envy", children: [] },
                ],
              },
              {
                title: "Custom Builds",
                id: "custom_builds",
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Books",
    id: "books",
    children: [
      {
        title: "Fiction",
        id: "fiction",
        children: [
          {
            title: "Fantasy",
            id: "fantasy",
            children: [
              {
                title: "Epic",
                id: "epic",
                children: [
                  { title: "Lord of the Rings", id: "lotr", children: [] },
                  { title: "The Wheel of Time", id: "wot", children: [] },
                ],
              },
              {
                title: "Urban",
                id: "urban",
                children: [
                  { title: "Dresden Files", id: "dresden_files", children: [] },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
