import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = "Todo Tracker"
  showAddTask: boolean = false
  subscription: Subscription | undefined

  constructor(private uiService: UiService, private router: Router) {
    this.subscription = this.uiService.onToggle().subscribe(value => {
      return this.showAddTask = value
    })
  }

  ngOnInit(): void {
  }

  toggleAddTask() {
    this.uiService.toggleAddTask()
  }

  hasRoute(route: string) {
    return this.router.url === route
  }

}
