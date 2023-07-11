import {Component, Input} from '@angular/core';
import {Show} from "../../shared/models/show";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input() show: Show | undefined;

  onShowDetails(id: number | undefined) {
    console.log("Not implemented yet")
  }
}
