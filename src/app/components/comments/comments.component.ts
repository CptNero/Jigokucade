import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data/data.service";
import {Comment} from "../../models/comment";
import {FormBuilder} from "@angular/forms";
import { Router, ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: Comment[];
  currentGameId: number;
  sendCommentForm;

  constructor(
    private dataService: DataService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
  ) {
    this.sendCommentForm = this.formBuilder.group({
      commenterName: '',
      commentBody: '',
    });
  }

  ngOnInit(): void {
    this.comments = this.dataService.Comments;

    this.route.paramMap.subscribe(params => {
      this.currentGameId = +params.get("id");
    });

    console.log(this.currentGameId);
  }

  onSubmit(commentData) {
    this.comments.push(new Comment(
      Math.floor(Math.random() * Math.floor(1000)),
      this.currentGameId,
      commentData.commenterName,
      commentData.commentBody,
      this.dataService.Now
    ));

    this.sendCommentForm.reset();
  }

}
