export interface IPost
{
  title: string;
  likes?: number;
  userId: string;
  comments?: Array<string>;
}
