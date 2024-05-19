import { Injectable, ComponentFactoryResolver, ViewContainerRef, ComponentRef, Type, inject } from '@angular/core'
import { Subject } from 'rxjs'

interface DialogComponentType {
  initialize(dialogData: any): void
}

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private dialogContainer: ViewContainerRef
  private dialogInstance: ComponentRef<DialogComponentType> | null
  private _dialogCloseSubject: Subject<any> = new Subject<any>()
  private componentFactoryResolver = inject(ComponentFactoryResolver)

  setDialogContainer(container: ViewContainerRef) {
    this.dialogContainer = container
  }

  get dialogCloseSubjet() {
    return this._dialogCloseSubject
  }

  openDialog(dialogComponent: Type<DialogComponentType>, dialogData: any) {
    // Close the previous dialog if it exists
    this.closeDialog()
    // Resolve the component factory for the dialog component
    const dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(dialogComponent)
    // Create the new dialog component
    this.dialogInstance =  this.dialogContainer.createComponent(dialogComponentFactory)
    this.dialogInstance.instance.initialize(dialogData)

    this._dialogCloseSubject.next(dialogData)
    return this._dialogCloseSubject.asObservable()
  }

  closeDialog() {
    this._dialogCloseSubject.next(null)
    if (this.dialogInstance) {
      this.dialogInstance.destroy()
      this.dialogInstance = null
    }
  }

}
