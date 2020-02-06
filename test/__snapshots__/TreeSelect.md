# `TreeSelect`

#### `should select value correctly`

```
"<div class=\"k-tree\"><div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">First floor-1</span></div><div class=\"k-tree\"><div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">Second floor-1.1</span></div><div class=\"k-tree\"><div class=\"k-node k-expanded\"><div class=\"k-label k-leaf\"><span class=\"k-text\">Third floor-1.1.1</span></div><div class=\"k-tree\"></div></div></div></div></div></div><div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">First floor-2</span></div><div class=\"k-tree\"><div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">Second floor-2.1</span></div><div class=\"k-tree\"><div class=\"k-node k-expanded\"><div class=\"k-label k-leaf\"><span class=\"k-text\">Third floor-2.1.1</span></div><div class=\"k-tree\"></div></div><div class=\"k-node k-expanded\"><div class=\"k-label k-leaf\"><span class=\"k-text\">Third floor-2.1.2</span></div><div class=\"k-tree\"></div></div></div></div><div class=\"k-node k-expanded k-disabled\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">Second floor-2.2</span></div><div class=\"k-tree\"><div class=\"k-node k-expanded\"><div class=\"k-label k-leaf\"><span class=\"k-text\">Third floor-2.2.1</span></div><div class=\"k-tree\"></div></div></div></div></div></div></div>"
```

#### `multiple`

```
"<div class=\"k-tree\"><div class=\"k-node k-expanded k-selected\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">First floor-1</span></div><div class=\"k-tree\"><div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">Second floor-1.1</span></div><div class=\"k-tree\"><div class=\"k-node k-expanded\"><div class=\"k-label k-leaf\"><span class=\"k-text\">Third floor-1.1.1</span></div><div class=\"k-tree\"></div></div></div></div></div></div><div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">First floor-2</span></div><div class=\"k-tree\"><div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">Second floor-2.1</span></div><div class=\"k-tree\"><div class=\"k-node k-expanded\"><div class=\"k-label k-leaf\"><span class=\"k-text\">Third floor-2.1.1</span></div><div class=\"k-tree\"></div></div><div class=\"k-node k-expanded\"><div class=\"k-label k-leaf\"><span class=\"k-text\">Third floor-2.1.2</span></div><div class=\"k-tree\"></div></div></div></div><div class=\"k-node k-expanded k-disabled\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">Second floor-2.2</span></div><div class=\"k-tree\"><div class=\"k-node k-expanded\"><div class=\"k-label k-leaf\"><span class=\"k-text\">Third floor-2.2.1</span></div><div class=\"k-tree\"></div></div></div></div></div></div></div>"
```

```
"<div class=\"k-wrapper k-dropdown-open\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\" value=\"1\"><span class=\"k-values c-fade-enter\"><span class=\"k-select-tag c-fade-leave-active\" style=\"position: absolute; left: 107px; top: 6px;\"><span class=\"k-text\">Second floor-1.1</span><i class=\"k-icon ion-ios-close-empty k-close\"></i></span><span class=\"k-select-tag c-fade-move\" style=\"position: relative; left: 122px; top: -9px; transform: translate(-122px, 9px);\"><span class=\"k-text\">First floor-1</span><i class=\"k-icon ion-ios-close-empty k-close\"></i></span></span></div><span class=\"k-suffix\"><span class=\"k-suffix-icon\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></span></div><!--placeholder-->"
```

#### `checkbox`

```
"<div class=\"k-tree\"><div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">First floor-1</span></div><div class=\"k-tree\"><div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">Second floor-1.1</span></div><div class=\"k-tree\"><div class=\"k-node k-expanded\"><div class=\"k-label k-leaf\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">Third floor-1.1.1</span></div><div class=\"k-tree\"></div></div></div></div></div></div><div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">First floor-2</span></div><div class=\"k-tree\"><div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">Second floor-2.1</span></div><div class=\"k-tree\"><div class=\"k-node k-expanded\"><div class=\"k-label k-leaf\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">Third floor-2.1.1</span></div><div class=\"k-tree\"></div></div><div class=\"k-node k-expanded\"><div class=\"k-label k-leaf\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">Third floor-2.1.2</span></div><div class=\"k-tree\"></div></div></div></div><div class=\"k-node k-expanded k-disabled\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><label class=\"k-checkbox k-disabled\"><span class=\"k-wrapper\"><input type=\"checkbox\" disabled=\"\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">Second floor-2.2</span></div><div class=\"k-tree\"><div class=\"k-node k-expanded\"><div class=\"k-label k-leaf\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">Third floor-2.2.1</span></div><div class=\"k-tree\"></div></div></div></div></div></div></div>"
```

```
"<div class=\"k-wrapper k-dropdown-open\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\" value=\"\"><span class=\"k-placeholder c-ellipsis\">请选择</span></div><span class=\"k-suffix\"><span class=\"k-suffix-icon\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></span></div><!--placeholder-->"
```

#### `filterable`

```
"<div class=\"k-tree\"><div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">First floor-1</span></div><div class=\"k-tree\"></div></div><div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">First floor-2</span></div><div class=\"k-tree\"></div></div></div>"
```
