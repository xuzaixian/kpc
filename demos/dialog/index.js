import template from './index.vdt';
import Intact from 'intact';

export default class extends Intact {
    get template() { return template; }

    showDialog(name) {
        this.set(name, true);
    }

    async showDialogInstance() {
        const Dialog = await import('components/dialog');
        class MyDialog extends Dialog.default {
            @Intact.template()
            get template() {
                return `<t:parent><b:body>Dialog Instance</b:body></t:parent>`
            }

            ok() {
                console.log('You clicked OK!');
                this.close();
            }
        }
        const dialog = new MyDialog({
            title: 'Dialog instance'
        });
        dialog.show();
    }
}
