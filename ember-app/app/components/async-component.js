import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class AsyncComponent extends Component {
  @tracked TheComponent;
  @tracked error;

  loadComponent = async () => {
    this.error = null;

    try {
      let importedModule = await import('my-addon/components/demo/index');

      this.TheComponent = importedModule.default;
    } catch (e) {
      this.error = e;
    }
  };
}
