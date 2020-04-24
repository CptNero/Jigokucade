import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data/data.service";
import {Comment} from "../../models/comment";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { Router, ActivatedRoute, ParamMap} from "@angular/router";
import {commentValidator} from "./comment-validator";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: Comment[];
  comment: Comment = new Comment(0,0,"", "", new Date());
  currentGameId: number;
  commentForm;

  constructor(
    private dataService: DataService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
  ) {
    this.commentForm = this.createFormGroup();
  }

  ngOnInit(): void {
    this.comments = this.dataService.Comments;

    this.route.paramMap.subscribe(params => {
      this.currentGameId = +params.get("id");
    });

    console.log(this.currentGameId);
  }

  createFormGroup() {
    return new FormGroup({
      commenterName: new FormControl('', [Validators.required, commentValidator]),
      commentBody: new FormControl('', [Validators.required, commentValidator]),
    });
  }

  onSubmit(commentData) {
    this.comments.push(new Comment(
      Math.floor(Math.random() * Math.floor(1000)),
      this.currentGameId,
      commentData.commenterName,
      commentData.commentBody,
      this.dataService.Now
    ));

    this.commentForm.reset();
  }

  get commenterName() {
    return this.commentForm.get('commenterName');
  }

  get commentBody() {
    return this.commentForm.get('commentBody');
  }

}
