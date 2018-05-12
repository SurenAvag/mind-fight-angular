import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const subjectRoutes: Routes = [
    // {
    //     path: '',
    //     component: GameComponent,
    //     children: [
    //         {
    //             path: '',
    //             component: MainComponent
    //         },
    //         // {
    //         //     path: ':id',
    //         //     component: QuestionSingleComponent,
    //         //     resolve: {
    //         //         question: QuestionResolve
    //         //     }
    //         // }
    //     ],
    // }
];

@NgModule({
    imports: [
        RouterModule.forChild(subjectRoutes),
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})

export class SubjectRoutingModule { }
