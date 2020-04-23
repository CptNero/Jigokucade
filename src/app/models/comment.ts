export class Comment {
  id: number;
  gameId: number;
  commenterName: string;
  commentBody: string;
  sentOn: Date;

  constructor(id: number, gameId: number, commenterName: string, commentBody: string, sentOn: Date) {
    this.id = id;
    this.gameId = gameId;
    this.commenterName = commenterName;
    this.commentBody = commentBody;
    this.sentOn = sentOn;
  }
}
