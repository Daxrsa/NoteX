namespace Core.Entities
{
    public class Note
    {
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public string Name { get; set; }
        public long SizeInBytes { get; set; }
        public long Words { get; set; }
        public long Characters { get; set; }
        public Guid FolderId { get; set; }  
        public Folder Folder { get; set; } 
    }
}