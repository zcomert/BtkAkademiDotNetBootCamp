using AutoMapper;
using Entities.Dtos;
using Entities.Models;

namespace bsStoreApi
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<BookDtoForInsertion, Book>();
        }
    }
}
