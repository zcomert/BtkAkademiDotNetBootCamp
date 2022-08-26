using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace Entities.ErrorModel
{
    public class ErrorDetails
    {
        public int StatusCode { get; set; }
        public String Message { get; set; }

        public override string ToString() =>
            JsonSerializer.Serialize(this);
        /*
         {
            StatusCode : 500,
            Messsage: "..."
         }
         */

        
    }
}
