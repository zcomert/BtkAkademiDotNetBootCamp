using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Dtos
{
    public record BookDtoForInsertion
    {
        public String? Title { get; init; }
        public decimal Price { get; init; }
        public String? Summary { get; init; }
    }

    // BookDtoForInsertion -> Book
}
