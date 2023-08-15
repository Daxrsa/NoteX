namespace Core.Entities
{
    public class Folder
    {
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public string Name { get; set; }
        public long SizeInBytes { get; set; }
        public ICollection<Note> Note { get; set; } = new List<Note>();
    }
}