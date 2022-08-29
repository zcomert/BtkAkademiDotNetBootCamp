using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Repositories.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Authors",
                columns: table => new
                {
                    AuthorId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Authors", x => x.AuthorId);
                });

            migrationBuilder.CreateTable(
                name: "Books",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Price = table.Column<decimal>(type: "decimal(18,2)", nullable: false, defaultValue: 10m),
                    Summary = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AtCreated = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "GETDATE()")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Books", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Categories",
                columns: table => new
                {
                    CategoryId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CategoryName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Categories", x => x.CategoryId);
                });

            migrationBuilder.CreateTable(
                name: "BookDetails",
                columns: table => new
                {
                    BookDetailId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NumberOfPage = table.Column<int>(type: "int", nullable: false),
                    ISBN = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    City = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Country = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Language = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Publisher = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    BookId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BookDetails", x => x.BookDetailId);
                    table.ForeignKey(
                        name: "FK_BookDetails_Books_BookId",
                        column: x => x.BookId,
                        principalTable: "Books",
                        principalColumn: "Id");
                });

            migrationBuilder.InsertData(
                table: "Authors",
                columns: new[] { "AuthorId", "FirstName", "LastName" },
                values: new object[,]
                {
                    { 1, "İskender", "Pala" },
                    { 2, "Ali", "Şeriatı" },
                    { 3, "Ömer", "Seyfettin" }
                });

            migrationBuilder.InsertData(
                table: "Books",
                columns: new[] { "Id", "Price", "Summary", "Title" },
                values: new object[,]
                {
                    { 1, 120m, "...", "Devlet" },
                    { 2, 120m, "...", "Nutuk" },
                    { 3, 120m, "...", "Vatan" }
                });

            migrationBuilder.InsertData(
                table: "Categories",
                columns: new[] { "CategoryId", "CategoryName", "Description" },
                values: new object[,]
                {
                    { 1, "Computer Science", "Computer Science description" },
                    { 2, "Network", "Network description" },
                    { 3, "Database", "Database description" }
                });

            migrationBuilder.InsertData(
                table: "BookDetails",
                columns: new[] { "BookDetailId", "BookId", "City", "Country", "ISBN", "Language", "NumberOfPage", "Publisher" },
                values: new object[] { 1, 1, "Samsun", "Turkey", "1234-5456-1234", "Turkish", 100, "Samsun University" });

            migrationBuilder.InsertData(
                table: "BookDetails",
                columns: new[] { "BookDetailId", "BookId", "City", "Country", "ISBN", "Language", "NumberOfPage", "Publisher" },
                values: new object[] { 2, 2, "Ankara", "Turkey", "1234-5456-7891", "Turkish", 150, "Gazi University" });

            migrationBuilder.InsertData(
                table: "BookDetails",
                columns: new[] { "BookDetailId", "BookId", "City", "Country", "ISBN", "Language", "NumberOfPage", "Publisher" },
                values: new object[] { 3, 3, "İstanbul", "Turkey", "8741-5456-1234", "Turkish", 78, "Yıldız Techincal University" });

            migrationBuilder.CreateIndex(
                name: "IX_BookDetails_BookId",
                table: "BookDetails",
                column: "BookId",
                unique: true,
                filter: "[BookId] IS NOT NULL");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Authors");

            migrationBuilder.DropTable(
                name: "BookDetails");

            migrationBuilder.DropTable(
                name: "Categories");

            migrationBuilder.DropTable(
                name: "Books");
        }
    }
}
