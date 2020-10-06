import { QNotification } from '../../src/qComponents';
import QNotificationComponent from '../../src/qComponents/QNotification/src/QNotification.vue';
import '../../src/qComponents/QNotification/src/q-notification.scss';

export default {
  title: 'Components/QNotification',
  component: QNotificationComponent,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: [null, 'success', 'warning', 'info', 'error']
      }
    }
  }
};

export const QNotificationStory = (_, { argTypes }) => ({
  components: { QNotification },
  props: Object.keys(argTypes),
  methods: {
    handleClick() {
      QNotification({
        message: this.message,
        type: this.type,
        dangerouslyUseHTMLString: this.dangerouslyUseHTMLString,
        duration: this.duration,
        icon: this.icon
      });
    },

    handleCloseAllClick() {
      QNotification.closeAll();
    }
  },
  template: `
    <div>
      <q-button @click="handleClick">Click to open</q-button>
      <br /><br />
      <q-button @click="handleCloseAllClick">
        close all
      </q-button>
    </div>
    `
});

QNotificationStory.storyName = 'Default';
QNotificationStory.args = {
  message: 'Morbi massa libero, vehicula nec consequat sed, porta a sem.'
};
