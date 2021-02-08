export class SubredditModel {
    public id?: number;
    public name: string;
    public description: string;
    public postCount?: number;

    constructor(name: string, description: string, id?: number, postCount?: number) {
      this.name = name;
      this.description = description;
      this.id = id;
      this.postCount = postCount;
    }
}
