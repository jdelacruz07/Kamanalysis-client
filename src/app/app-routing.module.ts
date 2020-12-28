import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalysisComponent } from './analysis/analysis.component';
import { PerformanceRiskComponent } from './performance-risk/performance-risk.component';
import { StrategyComponent } from './strategy/strategy.component';
import { TimerComponent } from './timer/timer.component';

const routes: Routes = [
  { path: '', component: AnalysisComponent},
  { path: 'timer', component: TimerComponent},
  { path: 'riesgo-rendimiento', component: PerformanceRiskComponent},
  { path: 'estrategias', component: StrategyComponent}


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }