import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class Demo extends Component {
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

  get isLoading() {
    return !this.TheComponent && !this.error;
  }
}
