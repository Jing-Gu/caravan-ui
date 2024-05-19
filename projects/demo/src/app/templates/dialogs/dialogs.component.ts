import { Component, DestroyRef, inject, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from '@caravancoop/ui-kit/dialog';
import { DialogService } from '@caravancoop/ui-kit/services/dialog';
import { ButtonComponent } from '@caravancoop/ui-kit/button';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { filter, take } from 'rxjs'

@Component({
  selector: 'app-dialogs',
  standalone: true,
  imports: [CommonModule, ButtonComponent, DialogComponent],
  templateUrl: './dialogs.component.html',
  styleUrls: []
})
export class DialogsComponent  {

  private dialogService = inject(DialogService);
  private viewContainerRef = inject(ViewContainerRef);
  private destroyRef = inject(DestroyRef)

  openDialog() {
    const dialogData = {
      title: 'Consectetur adipisicing elit',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque ad est, aliquam reprehenderit animi necessitatibus ratione qui. Quia molestias repellat maiores accusamus illo enim repellendus nesciunt, eveniet quis aliquid dolorem, mollitia suscipit. Consequatur facilis eum cupiditate mollitia aliquam ipsam animi porro velit saepe quod quia, fugit quisquam sit. Dignissimos, quisquam necessitatibus. Vel aspernatur, quos impedit maiores ex sit aliquid asperiores praesentium! Quidem inventore officia eos aut. Voluptatum ex fugiat minus explicabo magnam nobis repudiandae similique quis consequuntur, soluta in sint rem nesciunt aliquam enim nisi aliquid totam, sequi aspernatur dolorum vitae. Molestiae, reprehenderit! Consequatur dolore, itaque laborum ex perferendis quia? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque ad est, aliquam reprehenderit animi necessitatibus ratione qui. Quia molestias repellat maiores accusamus illo enim repellendus nesciunt, eveniet quis aliquid dolorem, mollitia suscipit. Consequatur facilis eum cupiditate mollitia aliquam ipsam animi porro velit saepe quod quia, fugit quisquam sit. Dignissimos, quisquam necessitatibus. Vel aspernatur, quos impedit maiores ex sit aliquid asperiores praesentium! Quidem inventore officia eos aut. Voluptatum ex fugiat minus explicabo magnam nobis repudiandae similique quis consequuntur, soluta in sint rem nesciunt aliquam enim nisi aliquid totam, sequi aspernatur dolorum vitae. Molestiae, reprehenderit! Consequatur dolore, itaque laborum ex perferendis quia? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque ad est, aliquam reprehenderit animi necessitatibus ratione qui. Quia molestias repellat maiores accusamus illo enim repellendus nesciunt, eveniet quis aliquid dolorem, mollitia suscipit. Consequatur facilis eum cupiditate mollitia aliquam ipsam animi porro velit saepe quod quia, fugit quisquam sit. Dignissimos, quisquam necessitatibus. Vel aspernatur, quos impedit maiores ex sit aliquid asperiores praesentium! Quidem inventore officia eos aut. Voluptatum ex fugiat minus explicabo magnam nobis repudiandae similique quis consequuntur, soluta in sint rem nesciunt aliquam enim nisi aliquid totam, sequi aspernatur dolorum vitae. Molestiae, reprehenderit! Consequatur dolore, itaque laborum ex perferendis quia?',
      buttons: {
        action: {label: 'Confirm', value: true, color: 'success'},
        discard: {label: 'Cancel', value: false}
      }
    }

    this.dialogService.setDialogContainer(this.viewContainerRef);
    this.dialogService.openDialog(DialogComponent, dialogData).pipe(
      filter((val) => val !== null),
      take(1),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe((val) => {
      if(val?.value) {
        console.log('true');
        this.dialogService.closeDialog();
        // Call logics to proceed the positive action
      } else {
        console.log('false');
        this.dialogService.closeDialog();
      }
    })

  }

}
