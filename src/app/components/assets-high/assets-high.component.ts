import { Component, OnInit } from '@angular/core';
import { BenchmarkService} from '../../services/benchmark.service';
import { Benchmark} from '../../models/benchmark';



@Component({
  selector: 'app-assets-high',
  templateUrl: './assets-high.component.html',
  styleUrls: ['./assets-high.component.css']
})
export class AssetsHighComponent implements OnInit {
  
  benchmark = {} as Benchmark;
  benchmarks: Benchmark[];

  constructor(private benchmarkService:BenchmarkService) { }

  ngOnInit():void {
    this.getBenchmarks();
  
  }
  // Chama o serviço para obtém todos os carros
  getBenchmarks() {
    this.benchmarkService.getBenchmarks().subscribe((benchmarks: Benchmark[]) => {
      this.benchmarks = benchmarks;
    });
  }

}