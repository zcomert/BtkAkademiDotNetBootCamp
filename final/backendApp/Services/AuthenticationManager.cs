using AutoMapper;
using Entities.Dtos;
using Entities.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Services.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services
{
    public class AuthenticationManager : IAuthService
    {
        // DI 
        private readonly IMapper _mapper;
        private readonly UserManager<User> _userManager;
        private readonly IConfiguration _configuration;

        public AuthenticationManager(IMapper mapper, 
            UserManager<User> userManager, 
            IConfiguration configuration)
        {
            _mapper = mapper;
            _userManager = userManager;
            _configuration = configuration;
        }

        public async Task<IdentityResult> RegisterUser(UserForRegistrationDto userForRegistration)
        {
           var user = _mapper.Map<User>(userForRegistration);
            var result = await _userManager
                .CreateAsync(user, userForRegistration.Password);

            if (result.Succeeded)
            {
                await _userManager
                    .AddToRolesAsync(user, userForRegistration.Roles);
            }
            return result;
        }
    }
}
