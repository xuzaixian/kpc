# `Dialog`

#### `should show correctly when render with value is true`

```
"<div class=\"k-overlay c-fade-appear\"></div><div class=\"k-wrapper\" style=\"display: block;\"><div class=\"k-dialog animate-appear\" style=\"left: ; top: ;\"><div class=\"k-header k-dialog-header\"><span class=\"k-title\">提示</span><button class=\"k-btn k-none k-btn-icon k-close\" title=\"关闭\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-body k-dialog-body\">test</div><div class=\"k-footer c-clearfix k-dialog-footer\"><button class=\"k-btn k-default k-cancel\" tabindex=\"0\" type=\"button\"><span>取消</span></button><button class=\"k-btn k-primary k-ok\" tabindex=\"0\" type=\"button\"><span>确定</span></button></div></div></div>"
```

#### `should prepend conent to block correctly`

```
"
                            dialog footer
                            <button class=\"k-btn k-default k-cancel\" tabindex=\"0\" type=\"button\"><span>取消</span></button><button class=\"k-btn k-primary k-ok\" tabindex=\"0\" type=\"button\"><span>确定</span></button>"
```

#### `basic test`

```
"<div class=\"k-header k-dialog-header\"><span class=\"k-title\">Dialog Title</span><button class=\"k-btn k-none k-btn-icon k-close\" title=\"关闭\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-body k-dialog-body\">
        Dialog Body 
    </div><div class=\"k-footer c-clearfix k-dialog-footer\"><button class=\"k-btn k-default k-cancel\" tabindex=\"0\" type=\"button\"><span>取消</span></button><button class=\"k-btn k-primary k-ok\" tabindex=\"0\" type=\"button\"><span>确定</span></button></div>"
```

#### `methods test`

```
"<div class=\"k-header k-dialog-header\"><span class=\"k-title\">Dialog Title</span><button class=\"k-btn k-none k-btn-icon k-close\" title=\"关闭\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-body k-dialog-body\">
        Dialog Body 
    </div><div class=\"k-footer c-clearfix k-dialog-footer\"><button class=\"k-btn k-default k-cancel\" tabindex=\"0\" type=\"button\"><span>取消</span></button><button class=\"k-btn k-primary k-ok k-loading k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"k-icon ion-load-c icon-loading\"></i><span>确定</span></button></div>"
```

```
"<div class=\"k-header k-dialog-header\"><span class=\"k-title\">Dialog Title</span><button class=\"k-btn k-none k-btn-icon k-close\" title=\"关闭\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-body k-dialog-body\">
        Dialog Body 
    </div><div class=\"k-footer c-clearfix k-dialog-footer\"><button class=\"k-btn k-default k-cancel\" tabindex=\"0\" type=\"button\"><span>取消</span></button><button class=\"k-btn k-primary k-ok\" tabindex=\"0\" type=\"button\"><span>确定</span></button></div>"
```

```
"<div class=\"k-header k-dialog-header\"><span class=\"k-title\">Dialog Title</span><button class=\"k-btn k-none k-btn-icon k-close\" title=\"关闭\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-body k-dialog-body\">
        Dialog Body 
    </div><div class=\"k-footer c-clearfix k-dialog-footer\"><button class=\"k-btn k-default k-cancel\" tabindex=\"0\" type=\"button\"><span>取消</span></button><button class=\"k-btn k-primary k-ok k-disabled\" tabindex=\"-1\" type=\"button\"><span>确定</span></button></div>"
```

```
"<div class=\"k-header k-dialog-header\"><span class=\"k-title\">Dialog Title</span><button class=\"k-btn k-none k-btn-icon k-close\" title=\"关闭\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-body k-dialog-body\">
        Dialog Body 
    </div><div class=\"k-footer c-clearfix k-dialog-footer\"><button class=\"k-btn k-default k-cancel\" tabindex=\"0\" type=\"button\"><span>取消</span></button><button class=\"k-btn k-primary k-ok\" tabindex=\"0\" type=\"button\"><span>确定</span></button></div>"
```

```
"<div class=\"k-header k-dialog-header\"><span class=\"k-title\">Dialog Title</span><button class=\"k-btn k-none k-btn-icon k-close\" title=\"关闭\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-body k-dialog-body\">
        Dialog Body 
    </div><div class=\"k-footer c-clearfix k-dialog-footer\"><button class=\"k-btn k-default k-cancel\" tabindex=\"0\" type=\"button\"><span>取消</span></button><button class=\"k-btn k-primary k-ok\" tabindex=\"0\" type=\"button\"><span>确定</span></button></div>"
```

#### `demos test`

```
"<div class=\"k-header k-dialog-header\"><span class=\"k-title\">Dialog Title</span><button class=\"k-btn k-none k-btn-icon k-close\" title=\"关闭\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-body k-dialog-body\">
        Dialog Body 
    </div><div class=\"k-footer c-clearfix k-dialog-footer\"><button class=\"k-btn k-default k-cancel\" tabindex=\"0\" type=\"button\"><span>取消</span></button><button class=\"k-btn k-primary k-ok\" tabindex=\"0\" type=\"button\"><span>确定</span></button></div>"
```

```
"<div class=\"k-header k-dialog-header\"><div class=\"k-title\"><i class=\"ion-person\"></i>
                Custom Header
            </div><button class=\"k-btn k-none k-btn-icon k-close\" title=\"关闭\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-body k-dialog-body\">

        Dialog Body 

        </div><div class=\"k-footer c-clearfix k-dialog-footer\">
            Custom Footer
            <button class=\"k-btn k-default k-cancel\" tabindex=\"0\" type=\"button\"><span>取消</span></button><button class=\"k-btn k-primary k-ok\" tabindex=\"0\" type=\"button\"><span>确定</span></button></div>"
```

```
"<div class=\"k-header k-dialog-header\"><span class=\"k-title\">Dialog Title</span><button class=\"k-btn k-none k-btn-icon k-close\" title=\"关闭\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-body k-dialog-body\">Dialog Body</div><div class=\"k-footer c-clearfix k-dialog-footer\"><button class=\"k-btn k-default k-cancel\" tabindex=\"0\" type=\"button\"><span>取消</span></button><button class=\"k-btn k-primary k-ok\" tabindex=\"0\" type=\"button\"><span>确定</span></button></div>"
```

```
"<div class=\"k-header k-dialog-header\"><span class=\"k-title\">Extends Dialog</span><button class=\"k-btn k-none k-btn-icon k-close\" title=\"关闭\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-body k-dialog-body\">
        Hello
    </div><div class=\"k-footer c-clearfix k-dialog-footer\"><button class=\"k-btn k-default k-cancel\" tabindex=\"0\" type=\"button\"><span>取消</span></button><button class=\"k-btn k-primary k-ok\" tabindex=\"0\" type=\"button\"><span>确定</span></button></div>"
```

```
"<div class=\"k-header k-dialog-header\"><span class=\"k-title\">Dialog Title</span><button class=\"k-btn k-none k-btn-icon k-close\" title=\"关闭\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-body k-dialog-body\"><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div></div><div class=\"k-footer c-clearfix k-dialog-footer\"><button class=\"k-btn k-default k-cancel\" tabindex=\"0\" type=\"button\"><span>取消</span></button><button class=\"k-btn k-primary k-ok\" tabindex=\"0\" type=\"button\"><span>确定</span></button></div>"
```

```
"<div class=\"k-header k-dialog-header\"><span class=\"k-title\">Dialog Title</span><button class=\"k-btn k-none k-btn-icon k-close\" title=\"关闭\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-body k-dialog-body\"><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div></div><div class=\"k-footer c-clearfix k-dialog-footer\"><button class=\"k-btn k-default k-cancel\" tabindex=\"0\" type=\"button\"><span>取消</span></button><button class=\"k-btn k-primary k-ok\" tabindex=\"0\" type=\"button\"><span>确定</span></button></div>"
```

```
"<div class=\"k-header k-dialog-header\"><span class=\"k-title\">Dialog Title</span><button class=\"k-btn k-none k-btn-icon k-close\" title=\"关闭\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-body k-dialog-body\">
                Size: large</div><div class=\"k-footer c-clearfix k-dialog-footer\"><button class=\"k-btn k-default k-cancel\" tabindex=\"0\" type=\"button\"><span>取消</span></button><button class=\"k-btn k-primary k-ok\" tabindex=\"0\" type=\"button\"><span>确定</span></button></div>"
```

```
"<div class=\"k-header k-dialog-header\"><span class=\"k-title\">Dialog Title</span><button class=\"k-btn k-none k-btn-icon k-close\" title=\"关闭\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-body k-dialog-body\">
        Dialog Body 
    </div><div class=\"k-footer c-clearfix k-dialog-footer\"><button class=\"k-btn k-default k-cancel\" tabindex=\"0\" type=\"button\"><span>取消</span></button><button class=\"k-btn k-primary k-ok\" tabindex=\"0\" type=\"button\"><span>确定</span></button></div>"
```

#### `async close`

```
"<div class=\"k-header k-dialog-header\"><span class=\"k-title\">Customized ok callback</span><button class=\"k-btn k-none k-btn-icon k-close\" title=\"关闭\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-body k-dialog-body\"><form class=\"k-form k-horizontal\" novalidate=\"\"><div class=\"k-form-item\"><label class=\"k-label\">Code:</label><div class=\"k-content\"><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"please enter digits\"></div></div></div></div></form></div><div class=\"k-footer c-clearfix k-dialog-footer\"><button class=\"k-btn k-default k-cancel\" tabindex=\"0\" type=\"button\"><span>取消</span></button><button class=\"k-btn k-primary k-ok\" tabindex=\"0\" type=\"button\"><span>确定</span></button></div>"
```

#### `async open`

```
"<div class=\"k-header k-dialog-header\"><span class=\"k-title\">Async Open Dialog</span><button class=\"k-btn k-none k-btn-icon k-close\" title=\"关闭\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-body k-dialog-body\">
        Hello KPC</div><div class=\"k-footer c-clearfix k-dialog-footer\"><button class=\"k-btn k-default k-cancel\" tabindex=\"0\" type=\"button\"><span>取消</span></button><button class=\"k-btn k-primary k-ok\" tabindex=\"0\" type=\"button\"><span>确定</span></button></div>"
```

#### `static methods`

```
"<div class=\"k-header k-dialog-header\"><span class=\"k-title\"></span></div><div class=\"k-body k-dialog-body\"><div class=\"k-tip-icon\"><i class=\"k-icon ion-ios-checkmark\"></i></div><div class=\"k-content-wrapper\">test</div></div><div class=\"k-footer c-clearfix k-dialog-footer\"><button class=\"k-btn k-primary k-ok\" tabindex=\"0\" type=\"button\"><span>确定</span></button></div>"
```

```
"<div class=\"k-header k-dialog-header\"><span class=\"k-title\"></span><button class=\"k-btn k-none k-btn-icon k-close\" title=\"关闭\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-body k-dialog-body\"><div class=\"k-tip-icon\"></div><div class=\"k-content-wrapper\">test</div></div><div class=\"k-footer c-clearfix k-dialog-footer\"><button class=\"k-btn k-default k-cancel\" tabindex=\"0\" type=\"button\"><span>取消</span></button><button class=\"k-btn k-primary k-ok\" tabindex=\"0\" type=\"button\"><span>确定</span></button></div>"
```

```
"<div class=\"k-header k-dialog-header\"><span class=\"k-title\"></span></div><div class=\"k-body k-dialog-body\"><div class=\"k-tip-icon\"><i class=\"k-icon ion-ios-close\"></i></div><div class=\"k-content-wrapper\"><div class=\"k-title\">error</div>test</div></div><div class=\"k-footer c-clearfix k-dialog-footer\"><button class=\"k-btn k-primary k-ok\" tabindex=\"0\" type=\"button\"><span>确定</span></button></div>"
```

#### `should only hide body`

```
"<div class=\"k-overlay\" style=\"display: none;\"></div><div class=\"k-wrapper\"><div class=\"k-dialog\" style=\"display: none;\"><div class=\"k-header k-dialog-header\"><span class=\"k-title\">Dialog Title</span><button class=\"k-btn k-none k-btn-icon k-close\" title=\"关闭\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-body k-dialog-body\"><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div></div><div class=\"k-footer c-clearfix k-dialog-footer\"><button class=\"k-btn k-default k-cancel\" tabindex=\"0\" type=\"button\"><span>取消</span></button><button class=\"k-btn k-primary k-ok\" tabindex=\"0\" type=\"button\"><span>确定</span></button></div></div></div>"
```

```
"<div class=\"k-header k-dialog-header\"><span class=\"k-title\">Dialog Title</span><button class=\"k-btn k-none k-btn-icon k-close\" title=\"关闭\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-body k-dialog-body\"><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div></div><div class=\"k-footer c-clearfix k-dialog-footer\"><button class=\"k-btn k-default k-cancel\" tabindex=\"0\" type=\"button\"><span>取消</span></button><button class=\"k-btn k-primary k-ok\" tabindex=\"0\" type=\"button\"><span>确定</span></button></div>"
```

```
"<div class=\"k-overlay\" style=\"display: none;\"></div><div class=\"k-wrapper\" style=\"display: none;\"><div class=\"k-dialog\" style=\"display: none;\"><div class=\"k-header k-dialog-header\"><span class=\"k-title\">Dialog Title</span><button class=\"k-btn k-none k-btn-icon k-close\" title=\"关闭\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-body k-dialog-body\"><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div></div><div class=\"k-footer c-clearfix k-dialog-footer\"><button class=\"k-btn k-default k-cancel\" tabindex=\"0\" type=\"button\"><span>取消</span></button><button class=\"k-btn k-primary k-ok\" tabindex=\"0\" type=\"button\"><span>确定</span></button></div></div></div>"
```

#### `"after each" hook`

```
"<div class=\"k-header k-dialog-header\"><span class=\"k-title\">Async Open Dialog</span><button class=\"k-btn k-none k-btn-icon k-close\" title=\"关闭\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-body k-dialog-body\">
        Hello KPC</div><div class=\"k-footer c-clearfix k-dialog-footer\"><button class=\"k-btn k-default k-cancel\" tabindex=\"0\" type=\"button\"><span>取消</span></button><button class=\"k-btn k-primary k-ok\" tabindex=\"0\" type=\"button\"><span>确定</span></button></div>"
```

