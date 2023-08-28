namespace Domain.Entities
{
    public class Folder
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Path { get; set; }
        public double Size { get; set; }
        public ICollection<Note> Notes { get; set; } = new List<Note>();
    }
}