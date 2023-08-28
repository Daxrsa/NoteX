namespace Domain.Entities
{
    public class Note
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Body { get; set; }
        public double Size { get; set; }
        public string Path { get; set; }
        public Folder Folder { get; set; }
    }
}