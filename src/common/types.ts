export interface Posts {
  user_id: number;
  idea_description: string;
  target_audience: string;
  post_author: string;
  external_link: string;
  long_text: string;
  pronoun: string;
  category: string;
  tags: string[];
}

export type PartialPost = Pick<
  Posts,
  'user_id' | 'idea_description' | 'post_author' | 'long_text' | 'category'
>;

export type PostCategory = Pick<Posts, 'category'>;

export interface SinglePost {
  user_id: number;
  created_at: Date;
  post_author: string;
  category: string;
  long_text: string;
  external_link: string;
  tags: string[];
  line_one: string;
  line_two: string;
  line_three: string;
}
