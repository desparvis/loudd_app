from app import db  # Import the db instance from app.py
from sqlalchemy.dialects.postgresql import UUID
import uuid

class User(db.Model):
    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password_hash = db.Column(db.String(255), nullable=False)
    role = db.Column(db.Enum('artist', 'admin', 'fan', name="user_roles"), nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, server_default=db.func.now(), onupdate=db.func.now())

class Artist(db.Model):
    id = db.Column(UUID(as_uuid=True), db.ForeignKey('user.id'), primary_key=True)
    stage_name = db.Column(db.String(100), nullable=False)
    genre = db.Column(db.String(50))
    bio = db.Column(db.Text)
    profile_picture = db.Column(db.String(255))
    social_links = db.Column(db.JSON)  # PostgreSQL supports JSON

class Fan(db.Model):
    id = db.Column(UUID(as_uuid=True), db.ForeignKey('user.id'), primary_key=True)
    favorite_genres = db.Column(db.JSON)

class Admin(db.Model):
    id = db.Column(UUID(as_uuid=True), db.ForeignKey('user.id'), primary_key=True)
    permissions = db.Column(db.JSON)

class Song(db.Model):
    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    artist_id = db.Column(UUID(as_uuid=True), db.ForeignKey('artist.id'), nullable=False)
    title = db.Column(db.String(255), nullable=False)
    genre = db.Column(db.String(50))
    file_url = db.Column(db.String(255), nullable=False)
    cover_image = db.Column(db.String(255))
    release_date = db.Column(db.Date)
    created_at = db.Column(db.DateTime, server_default=db.func.now())

class Like(db.Model):
    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    fan_id = db.Column(UUID(as_uuid=True), db.ForeignKey('fan.id'), nullable=False)
    song_id = db.Column(UUID(as_uuid=True), db.ForeignKey('song.id'), nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())

class Comment(db.Model):
    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    fan_id = db.Column(UUID(as_uuid=True), db.ForeignKey('fan.id'), nullable=False)
    song_id = db.Column(UUID(as_uuid=True), db.ForeignKey('song.id'), nullable=False)
    comment_text = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())

class Playlist(db.Model):
    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    fan_id = db.Column(UUID(as_uuid=True), db.ForeignKey('fan.id'), nullable=False)
    name = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())

class PlaylistSong(db.Model):
    playlist_id = db.Column(UUID(as_uuid=True), db.ForeignKey('playlist.id'), primary_key=True)
    song_id = db.Column(UUID(as_uuid=True), db.ForeignKey('song.id'), primary_key=True)

class Report(db.Model):
    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    admin_id = db.Column(UUID(as_uuid=True), db.ForeignKey('admin.id'), nullable=False)
    reported_user_id = db.Column(UUID(as_uuid=True), db.ForeignKey('user.id'), nullable=False)
    reason = db.Column(db.Text, nullable=False)
    status = db.Column(db.Enum('pending', 'resolved', 'rejected', name="report_status"), default="pending")
    created_at = db.Column(db.DateTime, server_default=db.func.now())