# `Tree`

#### `expand and shrink`

```
"<div class=\"k-tree\"><div class=\"k-node\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">First floor-1</span></div></div><div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">First floor-2</span></div><div class=\"k-tree\"><div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">Second floor-2.1</span></div><div class=\"k-tree c-expand-enter\" style=\"height: 0px;\"><div class=\"k-node k-expanded\"><div class=\"k-label k-leaf\"><span class=\"k-text\">Third floor-2.1.1</span></div><div class=\"k-tree\"></div></div><div class=\"k-node\"><div class=\"k-label k-leaf\"><span class=\"k-text\">Third floor-2.1.2</span></div></div></div></div><div class=\"k-node k-disabled\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">Second floor-2.2</span></div></div></div></div></div>"
```

```
"<div class=\"k-tree\"><div class=\"k-node\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">First floor-1</span></div></div><div class=\"k-node\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">First floor-2</span></div></div></div>"
```

```
"<div class=\"k-tree\"><div class=\"k-node\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">First floor-1</span></div></div><div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">First floor-2</span></div><div class=\"k-tree c-expand-enter\" style=\"height: 0px;\"><div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">Second floor-2.1</span></div><div class=\"k-tree\"><div class=\"k-node k-expanded\"><div class=\"k-label k-leaf\"><span class=\"k-text\">Third floor-2.1.1</span></div><div class=\"k-tree\"></div></div><div class=\"k-node\"><div class=\"k-label k-leaf\"><span class=\"k-text\">Third floor-2.1.2</span></div></div></div></div><div class=\"k-node k-disabled\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">Second floor-2.2</span></div></div></div></div></div>"
```

#### `checkbox`

```
"[{\"label\":\"Third floor-2.1.1\",\"key\":\"floor-2.1.1\"}]"
```

```
"<div class=\"k-tree\"><div class=\"k-node\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">First floor-1</span></div></div><div class=\"k-node\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><label class=\"k-checkbox k-checked\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">First floor-2</span></div></div></div>"
```

```
"[{\"label\":\"First floor-2\",\"children\":[{\"label\":\"Second floor-2.1\",\"children\":[{\"label\":\"Third floor-2.1.1\",\"key\":\"floor-2.1.1\"},{\"label\":\"Third floor-2.1.2\"}]},{\"label\":\"Second floor-2.2\",\"disabled\":true,\"children\":[{\"label\":\"Third floor-2.2.1\"}]}]},{\"label\":\"Second floor-2.1\",\"children\":[{\"label\":\"Third floor-2.1.1\",\"key\":\"floor-2.1.1\"},{\"label\":\"Third floor-2.1.2\"}]},{\"label\":\"Third floor-2.1.1\",\"key\":\"floor-2.1.1\"},{\"label\":\"Third floor-2.1.2\"}]"
```

```
"<div class=\"k-tree\"><div class=\"k-node\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">First floor-1</span></div></div><div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><label class=\"k-checkbox k-checked\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">First floor-2</span></div><div class=\"k-tree c-expand-enter\" style=\"height: 0px;\"><div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><label class=\"k-checkbox k-checked\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">Second floor-2.1</span></div><div class=\"k-tree c-expand-enter\" style=\"height: 0px;\"><div class=\"k-node\"><div class=\"k-label k-leaf\"><label class=\"k-checkbox k-checked\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">Third floor-2.1.1</span></div></div><div class=\"k-node\"><div class=\"k-label k-leaf\"><label class=\"k-checkbox k-checked\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">Third floor-2.1.2</span></div></div></div></div><div class=\"k-node k-disabled\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><label class=\"k-checkbox k-disabled\"><span class=\"k-wrapper\"><input type=\"checkbox\" disabled=\"\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">Second floor-2.2</span></div></div></div></div></div>"
```

```
"[{\"label\":\"Third floor-2.1.1\",\"key\":\"floor-2.1.1\"},{\"label\":\"Third floor-2.1.2\"}]"
```

```
"<div class=\"k-tree\"><div class=\"k-node\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">First floor-1</span></div></div><div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><label class=\"k-checkbox k-indeterminate\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">First floor-2</span></div><div class=\"k-tree c-expand-enter\" style=\"height: 0px;\"><div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><label class=\"k-checkbox k-indeterminate\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">Second floor-2.1</span></div><div class=\"k-tree c-expand-enter\" style=\"height: 0px;\"><div class=\"k-node\"><div class=\"k-label k-leaf\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">Third floor-2.1.1</span></div></div><div class=\"k-node\"><div class=\"k-label k-leaf\"><label class=\"k-checkbox k-checked\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">Third floor-2.1.2</span></div></div></div></div><div class=\"k-node k-disabled\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><label class=\"k-checkbox k-disabled\"><span class=\"k-wrapper\"><input type=\"checkbox\" disabled=\"\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">Second floor-2.2</span></div></div></div></div></div>"
```

```
"<div class=\"k-tree\"><div class=\"k-node\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">First floor-1</span></div></div><div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><label class=\"k-checkbox k-checked\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">First floor-2</span></div><div class=\"k-tree c-expand-enter\" style=\"height: 0px;\"><div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><label class=\"k-checkbox k-checked\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">Second floor-2.1</span></div><div class=\"k-tree c-expand-enter\" style=\"height: 0px;\"><div class=\"k-node\"><div class=\"k-label k-leaf\"><label class=\"k-checkbox k-checked\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">Third floor-2.1.1</span></div></div><div class=\"k-node\"><div class=\"k-label k-leaf\"><label class=\"k-checkbox k-checked\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">Third floor-2.1.2</span></div></div></div></div><div class=\"k-node k-disabled\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><label class=\"k-checkbox k-disabled\"><span class=\"k-wrapper\"><input type=\"checkbox\" disabled=\"\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">Second floor-2.2</span></div></div></div></div></div>"
```

```
"<div class=\"k-tree\"><div class=\"k-node\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">First floor-1</span></div></div><div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">First floor-2</span></div><div class=\"k-tree c-expand-enter\" style=\"height: 0px;\"><div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">Second floor-2.1</span></div><div class=\"k-tree c-expand-enter\" style=\"height: 0px;\"><div class=\"k-node\"><div class=\"k-label k-leaf\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">Third floor-2.1.1</span></div></div><div class=\"k-node\"><div class=\"k-label k-leaf\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">Third floor-2.1.2</span></div></div></div></div><div class=\"k-node k-disabled\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><label class=\"k-checkbox k-disabled\"><span class=\"k-wrapper\"><input type=\"checkbox\" disabled=\"\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">Second floor-2.2</span></div></div></div></div></div>"
```

#### `async load`

```
"<div class=\"k-tree\"><div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">parent</span></div><div class=\"k-tree c-expand-enter\" style=\"height: 0px;\"><div class=\"k-node\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">first child</span></div></div><div class=\"k-node\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">last child</span></div></div></div></div></div>"
```

```
"<div class=\"k-tree\"><div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">parent</span></div><div class=\"k-tree\" style=\"\"><div class=\"k-node\"><div class=\"k-label\"><i class=\"k-icon ion-load-c icon-loading\"></i><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">first child</span></div></div><div class=\"k-node\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">last child</span></div></div></div></div></div>"
```

```
"<div class=\"k-tree\"><div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">parent</span></div><div class=\"k-tree\" style=\"\"><div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">first child</span></div><div class=\"k-tree\" style=\"\"><div class=\"k-node\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">child1</span></div></div><div class=\"k-node\"><div class=\"k-label k-leaf\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">child2</span></div></div></div></div><div class=\"k-node\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">last child</span></div></div></div></div></div>"
```

```
"<div class=\"k-tree\"><div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><label class=\"k-checkbox k-checked\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">parent</span></div><div class=\"k-tree\" style=\"\"><div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><label class=\"k-checkbox k-checked\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">first child</span></div><div class=\"k-tree\" style=\"\"><div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><label class=\"k-checkbox k-checked\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">child1</span></div><div class=\"k-tree\" style=\"\"><div class=\"k-node\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><label class=\"k-checkbox k-checked\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">child1</span></div></div><div class=\"k-node\"><div class=\"k-label k-leaf\"><label class=\"k-checkbox k-checked\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">child2</span></div></div></div></div><div class=\"k-node\"><div class=\"k-label k-leaf\"><label class=\"k-checkbox k-checked\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">child2</span></div></div></div></div><div class=\"k-node\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><label class=\"k-checkbox k-checked\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">last child</span></div></div></div></div></div>"
```

#### `append and remove node`

```
"<div class=\"wrapper\"><div class=\"c-clearfix\"><div class=\"k-btns\"><button class=\"k-btn k-default k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>+</span></button></div></div><div class=\"k-tree\"><div class=\"k-node\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">First floor-1</span><div class=\"k-btns\"><button class=\"k-btn k-default k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>+</span></button><button class=\"k-btn k-default k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>-</span></button></div></div></div><div class=\"k-node\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">First floor-2</span><div class=\"k-btns\"><button class=\"k-btn k-default k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>+</span></button><button class=\"k-btn k-default k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>-</span></button></div></div></div><div class=\"k-node c-expand-enter\" style=\"height: 0px;\"><div class=\"k-label k-leaf\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">Appended root node</span><div class=\"k-btns\"><button class=\"k-btn k-default k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>+</span></button><button class=\"k-btn k-default k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>-</span></button></div></div></div></div></div>"
```

```
Array [
  Object {
    "children": Array [
      Object {
        "children": Array [
          Object {
            "label": "Third floor-1.1.1",
          },
        ],
        "label": "Second floor-1.1",
      },
    ],
    "label": "First floor-1",
  },
  Object {
    "children": Array [
      Object {
        "children": Array [
          Object {
            "key": "floor-2.1.1",
            "label": "Third floor-2.1.1",
          },
          Object {
            "label": "Third floor-2.1.2",
          },
        ],
        "label": "Second floor-2.1",
      },
      Object {
        "children": Array [
          Object {
            "label": "Third floor-2.2.1",
          },
        ],
        "disabled": true,
        "label": "Second floor-2.2",
      },
    ],
    "label": "First floor-2",
  },
  Object {
    "label": "Appended root node",
  },
]
```

```
"<div class=\"wrapper\"><div class=\"c-clearfix\"><div class=\"k-btns\"><button class=\"k-btn k-default k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>+</span></button></div></div><div class=\"k-tree\"><div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">First floor-1</span><div class=\"k-btns\"><button class=\"k-btn k-default k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>+</span></button><button class=\"k-btn k-default k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>-</span></button></div></div><div class=\"k-tree c-expand-enter\" style=\"height: 0px;\"><div class=\"k-node\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">Second floor-1.1</span><div class=\"k-btns\"><button class=\"k-btn k-default k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>+</span></button><button class=\"k-btn k-default k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>-</span></button></div></div></div><div class=\"k-node\"><div class=\"k-label k-leaf\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">Appended node</span><div class=\"k-btns\"><button class=\"k-btn k-default k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>+</span></button><button class=\"k-btn k-default k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>-</span></button></div></div></div></div></div><div class=\"k-node\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">First floor-2</span><div class=\"k-btns\"><button class=\"k-btn k-default k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>+</span></button><button class=\"k-btn k-default k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>-</span></button></div></div></div><div class=\"k-node c-expand-enter\" style=\"height: 0px;\"><div class=\"k-label k-leaf\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">Appended root node</span><div class=\"k-btns\"><button class=\"k-btn k-default k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>+</span></button><button class=\"k-btn k-default k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>-</span></button></div></div></div></div></div>"
```

```
"<div class=\"wrapper\"><div class=\"c-clearfix\"><div class=\"k-btns\"><button class=\"k-btn k-default k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>+</span></button></div></div><div class=\"k-tree\"><div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><label class=\"k-checkbox k-indeterminate\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">First floor-1</span><div class=\"k-btns\"><button class=\"k-btn k-default k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>+</span></button><button class=\"k-btn k-default k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>-</span></button></div></div><div class=\"k-tree c-expand-enter\" style=\"height: 0px;\"><div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><label class=\"k-checkbox k-checked\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">Second floor-1.1</span><div class=\"k-btns\"><button class=\"k-btn k-default k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>+</span></button><button class=\"k-btn k-default k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>-</span></button></div></div><div class=\"k-tree c-expand-enter\" style=\"height: 0px;\"><div class=\"k-node\"><div class=\"k-label k-leaf\"><label class=\"k-checkbox k-checked\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">Third floor-1.1.1</span><div class=\"k-btns\"><button class=\"k-btn k-default k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>+</span></button><button class=\"k-btn k-default k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>-</span></button></div></div></div><div class=\"k-node\"><div class=\"k-label k-leaf\"><label class=\"k-checkbox k-checked\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">Appended node</span><div class=\"k-btns\"><button class=\"k-btn k-default k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>+</span></button><button class=\"k-btn k-default k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>-</span></button></div></div></div></div></div><div class=\"k-node\"><div class=\"k-label k-leaf\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">Appended node</span><div class=\"k-btns\"><button class=\"k-btn k-default k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>+</span></button><button class=\"k-btn k-default k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>-</span></button></div></div></div></div></div><div class=\"k-node\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">First floor-2</span><div class=\"k-btns\"><button class=\"k-btn k-default k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>+</span></button><button class=\"k-btn k-default k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>-</span></button></div></div></div><div class=\"k-node c-expand-enter\" style=\"height: 0px;\"><div class=\"k-label k-leaf\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">Appended root node</span><div class=\"k-btns\"><button class=\"k-btn k-default k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>+</span></button><button class=\"k-btn k-default k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>-</span></button></div></div></div></div></div>"
```

```
"<div class=\"wrapper\"><div class=\"c-clearfix\"><div class=\"k-btns\"><button class=\"k-btn k-default k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>+</span></button></div></div><div class=\"k-tree\"><div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><label class=\"k-checkbox k-indeterminate\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">First floor-1</span><div class=\"k-btns\"><button class=\"k-btn k-default k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>+</span></button><button class=\"k-btn k-default k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>-</span></button></div></div><div class=\"k-tree c-expand-enter\" style=\"height: 0px;\"><div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><label class=\"k-checkbox k-checked\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">Second floor-1.1</span><div class=\"k-btns\"><button class=\"k-btn k-default k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>+</span></button><button class=\"k-btn k-default k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>-</span></button></div></div><div class=\"k-tree c-expand-enter\" style=\"height: 0px;\"><div class=\"k-node c-expand-leave-active\" style=\"height: 30px;\"><div class=\"k-label k-leaf\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">Third floor-1.1.1</span><div class=\"k-btns\"><button class=\"k-btn k-default k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>+</span></button><button class=\"k-btn k-default k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>-</span></button></div></div></div><div class=\"k-node\"><div class=\"k-label k-leaf\"><label class=\"k-checkbox k-checked\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">Appended node</span><div class=\"k-btns\"><button class=\"k-btn k-default k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>+</span></button><button class=\"k-btn k-default k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>-</span></button></div></div></div></div></div><div class=\"k-node\"><div class=\"k-label k-leaf\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">Appended node</span><div class=\"k-btns\"><button class=\"k-btn k-default k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>+</span></button><button class=\"k-btn k-default k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>-</span></button></div></div></div></div></div><div class=\"k-node\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">First floor-2</span><div class=\"k-btns\"><button class=\"k-btn k-default k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>+</span></button><button class=\"k-btn k-default k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>-</span></button></div></div></div><div class=\"k-node c-expand-enter\" style=\"height: 0px;\"><div class=\"k-label k-leaf\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">Appended root node</span><div class=\"k-btns\"><button class=\"k-btn k-default k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>+</span></button><button class=\"k-btn k-default k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>-</span></button></div></div></div></div></div>"
```

```
Array [
  Object {
    "children": Array [
      Object {
        "children": Array [
          Object {
            "label": "Appended node",
          },
        ],
        "label": "Second floor-1.1",
      },
      Object {
        "label": "Appended node",
      },
    ],
    "label": "First floor-1",
  },
  Object {
    "children": Array [
      Object {
        "children": Array [
          Object {
            "key": "floor-2.1.1",
            "label": "Third floor-2.1.1",
          },
          Object {
            "label": "Third floor-2.1.2",
          },
        ],
        "label": "Second floor-2.1",
      },
      Object {
        "children": Array [
          Object {
            "label": "Third floor-2.2.1",
          },
        ],
        "disabled": true,
        "label": "Second floor-2.2",
      },
    ],
    "label": "First floor-2",
  },
  Object {
    "label": "Appended root node",
  },
]
```

#### `filterable`

```
"<div><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"Please enter keywords to filter node.\"></div></div><div class=\"k-tree\"><div class=\"k-node\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">First floor-1</span></div></div><div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">First floor-2</span></div><div class=\"k-tree\"></div></div></div></div>"
```

```
"<div><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"Please enter keywords to filter node.\"></div></div><div class=\"k-tree\"><div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">First floor-2</span></div><div class=\"k-tree\"><div class=\"k-node k-expanded\" style=\"\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">Second floor-2.1</span></div><div class=\"k-tree\"><div class=\"k-node\"><div class=\"k-label k-leaf\"><span class=\"k-text\">Third floor-2.1.1</span></div></div></div></div></div></div></div></div>"
```

#### `draggable`

```
"<div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">First floor-1</span></div><div class=\"k-tree\" style=\"\"><div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">Second floor-1.1</span></div><div class=\"k-tree\"><div class=\"k-node\"><div class=\"k-label k-leaf\"><span class=\"k-text\">This node can not be dragged and dropped.</span></div></div></div></div></div></div><div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">First floor-2</span></div><div class=\"k-tree\"><div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">Second floor-2.1</span></div><div class=\"k-tree\"><div class=\"k-node\"><div class=\"k-label k-leaf\"><span class=\"k-text\">Third floor-2.1.1</span></div></div><div class=\"k-node\"><div class=\"k-label k-leaf\"><span class=\"k-text\">Third floor-2.1.2</span></div></div></div></div><div class=\"k-node\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">Second floor-2.2</span></div></div><div class=\"k-node k-disabled\"><div class=\"k-label k-leaf\"><span class=\"k-text\">Second floor-2.3</span></div></div></div></div>"
```

```
"<div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">First floor-1</span></div><div class=\"k-tree\" style=\"\"><div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">Second floor-1.1</span></div><div class=\"k-tree\"><div class=\"k-node\"><div class=\"k-label k-leaf\"><span class=\"k-text\">This node can not be dragged and dropped.</span></div></div></div></div></div></div><div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">First floor-2</span></div><div class=\"k-tree\"><div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">Second floor-2.1</span></div><div class=\"k-tree\"><div class=\"k-node\"><div class=\"k-label k-leaf\"><span class=\"k-text\">Third floor-2.1.1</span></div></div><div class=\"k-node\"><div class=\"k-label k-leaf\"><span class=\"k-text\">Third floor-2.1.2</span></div></div></div></div><div class=\"k-node\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">Second floor-2.2</span></div></div><div class=\"k-node k-disabled\"><div class=\"k-label k-leaf\"><span class=\"k-text\">Second floor-2.3</span></div></div></div></div>"
```

```
"<div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">First floor-1</span></div><div class=\"k-tree\" style=\"\"><div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">Second floor-1.1</span></div><div class=\"k-tree\"><div class=\"k-node\"><div class=\"k-label k-leaf\"><span class=\"k-text\">This node can not be dragged and dropped.</span></div></div></div></div></div></div><div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">First floor-2</span></div><div class=\"k-tree\"><div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">Second floor-2.1</span></div><div class=\"k-tree\"><div class=\"k-node\"><div class=\"k-label k-leaf\"><span class=\"k-text\">Third floor-2.1.1</span></div></div><div class=\"k-node\"><div class=\"k-label k-leaf\"><span class=\"k-text\">Third floor-2.1.2</span></div></div></div></div><div class=\"k-node\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">Second floor-2.2</span></div></div><div class=\"k-node k-disabled\"><div class=\"k-label k-leaf\"><span class=\"k-text\">Second floor-2.3</span></div></div></div></div>"
```

```
"<div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">First floor-1</span></div><div class=\"k-tree\" style=\"\"><div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">Second floor-1.1</span></div><div class=\"k-tree\"><div class=\"k-node\"><div class=\"k-label k-leaf\"><span class=\"k-text\">This node can not be dragged and dropped.</span></div></div></div></div></div></div><div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">First floor-2</span></div><div class=\"k-tree\"><div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">Second floor-2.1</span></div><div class=\"k-tree\"><div class=\"k-node\" style=\"\"><div class=\"k-label k-leaf\"><span class=\"k-text\">Third floor-2.1.2</span></div></div><div class=\"k-node\" style=\"\"><div class=\"k-label k-leaf\"><span class=\"k-text\">Third floor-2.1.1</span></div></div></div></div><div class=\"k-node\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">Second floor-2.2</span></div></div><div class=\"k-node k-disabled\"><div class=\"k-label k-leaf\"><span class=\"k-text\">Second floor-2.3</span></div></div></div></div>"
```

```
Array [
  Object {
    "children": Array [
      Object {
        "children": Array [
          Object {
            "key": "1-1-1",
            "label": "This node can not be dragged and dropped.",
          },
        ],
        "key": "1-1",
        "label": "Second floor-1.1",
      },
    ],
    "key": "1",
    "label": "First floor-1",
  },
  Object {
    "children": Array [
      Object {
        "children": Array [
          Object {
            "key": "2-1-2",
            "label": "Third floor-2.1.2",
          },
          Object {
            "key": "2-1-1",
            "label": "Third floor-2.1.1",
          },
        ],
        "key": "2-1",
        "label": "Second floor-2.1",
      },
      Object {
        "children": Array [
          Object {
            "key": "2-2-1",
            "label": "Third floor-2.2.1",
          },
        ],
        "key": "2-2",
        "label": "Second floor-2.2",
      },
      Object {
        "disabled": true,
        "key": "2-3",
        "label": "Second floor-2.3",
      },
    ],
    "key": "2",
    "label": "First floor-2",
  },
]
```

```
"<div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">First floor-1</span></div><div class=\"k-tree\" style=\"\"><div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">Second floor-1.1</span></div><div class=\"k-tree\"><div class=\"k-node\"><div class=\"k-label k-leaf\"><span class=\"k-text\">This node can not be dragged and dropped.</span></div></div></div></div></div></div><div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">First floor-2</span></div><div class=\"k-tree\"><div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">Second floor-2.1</span></div><div class=\"k-tree\"><div class=\"k-node\" style=\"\"><div class=\"k-label k-leaf\"><span class=\"k-text\">Third floor-2.1.1</span></div></div><div class=\"k-node\" style=\"\"><div class=\"k-label k-leaf\"><span class=\"k-text\">Third floor-2.1.2</span></div></div></div></div><div class=\"k-node\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">Second floor-2.2</span></div></div><div class=\"k-node k-disabled\"><div class=\"k-label k-leaf\"><span class=\"k-text\">Second floor-2.3</span></div></div></div></div>"
```

```
Array [
  Object {
    "children": Array [
      Object {
        "children": Array [
          Object {
            "key": "1-1-1",
            "label": "This node can not be dragged and dropped.",
          },
        ],
        "key": "1-1",
        "label": "Second floor-1.1",
      },
    ],
    "key": "1",
    "label": "First floor-1",
  },
  Object {
    "children": Array [
      Object {
        "children": Array [
          Object {
            "key": "2-1-1",
            "label": "Third floor-2.1.1",
          },
          Object {
            "key": "2-1-2",
            "label": "Third floor-2.1.2",
          },
        ],
        "key": "2-1",
        "label": "Second floor-2.1",
      },
      Object {
        "children": Array [
          Object {
            "key": "2-2-1",
            "label": "Third floor-2.2.1",
          },
        ],
        "key": "2-2",
        "label": "Second floor-2.2",
      },
      Object {
        "disabled": true,
        "key": "2-3",
        "label": "Second floor-2.3",
      },
    ],
    "key": "2",
    "label": "First floor-2",
  },
]
```

```
"<div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">First floor-1</span></div><div class=\"k-tree\" style=\"\"><div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">Second floor-1.1</span></div><div class=\"k-tree\"><div class=\"k-node\"><div class=\"k-label k-leaf\"><span class=\"k-text\">This node can not be dragged and dropped.</span></div></div></div></div></div></div><div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">First floor-2</span></div><div class=\"k-tree\"><div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">Second floor-2.1</span></div><div class=\"k-tree\"><div class=\"k-node k-expanded\" style=\"\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">Third floor-2.1.1</span></div><div class=\"k-tree\" style=\"\"><div class=\"k-node\"><div class=\"k-label k-leaf\"><span class=\"k-text\">Third floor-2.1.2</span></div></div></div></div></div></div><div class=\"k-node\" style=\"\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">Second floor-2.2</span></div></div><div class=\"k-node k-disabled\" style=\"\"><div class=\"k-label k-leaf\"><span class=\"k-text\">Second floor-2.3</span></div></div></div></div>"
```

```
Array [
  Object {
    "children": Array [
      Object {
        "children": Array [
          Object {
            "key": "1-1-1",
            "label": "This node can not be dragged and dropped.",
          },
        ],
        "key": "1-1",
        "label": "Second floor-1.1",
      },
    ],
    "key": "1",
    "label": "First floor-1",
  },
  Object {
    "children": Array [
      Object {
        "children": Array [
          Object {
            "children": Array [
              Object {
                "key": "2-1-2",
                "label": "Third floor-2.1.2",
              },
            ],
            "key": "2-1-1",
            "label": "Third floor-2.1.1",
          },
        ],
        "key": "2-1",
        "label": "Second floor-2.1",
      },
      Object {
        "children": Array [
          Object {
            "key": "2-2-1",
            "label": "Third floor-2.2.1",
          },
        ],
        "key": "2-2",
        "label": "Second floor-2.2",
      },
      Object {
        "disabled": true,
        "key": "2-3",
        "label": "Second floor-2.3",
      },
    ],
    "key": "2",
    "label": "First floor-2",
  },
]
```

