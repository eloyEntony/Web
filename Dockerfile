#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["ASP_01_TestProject.csproj", ""]
RUN dotnet restore "./ASP_01_TestProject.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "ASP_01_TestProject.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "ASP_01_TestProject.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "ASP_01_TestProject.dll"]